import Promise from 'bluebird';
import newDebug from 'debug';

import broadcastHelpers from './helpers';
import formatterFactory from '../formatter';
import operations from './operations';
import creaApi from '../api';
import creaAuth from '../auth';
import { camelCase } from '../utils';

const debug = newDebug('crea:broadcast');
const noop = function() {}
const formatter = formatterFactory(creaApi);

const creaBroadcast = {};

// Base transaction logic -----------------------------------------------------

/**
 * Sign and broadcast transactions on the crea network
 */

creaBroadcast.send = function creaBroadcast$send(tx, privKeys, callback) {
  const resultP = creaBroadcast._prepareTransaction(tx)
    .then((transaction) => {
      debug(
        'Signing transaction (transaction, transaction.operations)',
        transaction, transaction.operations
      );
      return Promise.join(
        transaction,
        creaAuth.signTransaction(transaction, privKeys)
      );
    })
    .spread((transaction, signedTransaction) => {
      debug(
        'Broadcasting transaction (transaction, transaction.operations)',
        transaction, transaction.operations
      );
      return creaApi.broadcastTransactionSynchronousAsync(
        signedTransaction
      ).then((result) => {
        return Object.assign({}, result, signedTransaction);
      });
    });

  resultP.nodeify(callback || noop);
};

creaBroadcast._prepareTransaction = function creaBroadcast$_prepareTransaction(tx) {
  const propertiesP = creaApi.getDynamicGlobalPropertiesAsync();
  return propertiesP
    .then((properties) => {
      // Set defaults on the transaction
      const chainDate = new Date(properties.time + 'Z');
      const refBlockNum = (properties.last_irreversible_block_num - 1) & 0xFFFF;
      return creaApi.getBlockAsync(properties.last_irreversible_block_num).then((block) => {
        const headBlockId = block.previous;
        return Object.assign({
          ref_block_num: refBlockNum,
          ref_block_prefix: new Buffer(headBlockId, 'hex').readUInt32LE(4),
          expiration: new Date(
            chainDate.getTime() +
            600 * 1000
          ),
        }, tx);
      });
    });
};

creaBroadcast.sendOperations = function creaBroadcast$sendOperations (keys, ...ops) {

  const tx = {
    extensions: [],
    operations: [],
  };

  let callback = ops[ops.length -1];

  if (callback && typeof callback == 'function') {
    delete ops[ops.length -1];
  } else {
    callback = null;
  }

  ops.forEach(function (op) {
    tx.operations.push(op);
  });


  return creaBroadcast.send(tx, keys, callback);

};

// Generated wrapper ----------------------------------------------------------

// Generate operations from operations.json
operations.forEach((operation) => {
  const operationName = camelCase(operation.operation);
  const operationParams = operation.params || [];

  const useCommentPermlink =
    operationParams.indexOf('parent_permlink') !== -1 &&
    operationParams.indexOf('parent_permlink') !== -1;

  creaBroadcast[`${operationName}With`] =
    function creaBroadcast$specializedSendWith(wif, options, callback) {
      debug(`Sending operation "${operationName}" with`, {options, callback});
      const keys = {};
      if (operation.roles && operation.roles.length) {
        keys[operation.roles[0]] = wif; // TODO - Automatically pick a role? Send all?
      }
      return creaBroadcast.send({
        extensions: [],
        operations: [[operation.operation, Object.assign(
          {},
          options,
          options.json_metadata != null ? { json_metadata: toString(options.json_metadata), } : {},
          options.download != null ? { download: toString(options.download), } : {},
          useCommentPermlink && options.permlink == null ? {
            permlink: formatter.commentPermlink(options.parent_author, options.parent_permlink),
          } : {}
        )]],
      }, keys, callback);
    };

  creaBroadcast[`${operationName}Builder`] =
    function creaBroadcast$specializedBuilder(...args) {
      const options = operationParams.reduce((memo, param, i) => {
        memo[param] = args[i]; // eslint-disable-line no-param-reassign
        return memo;
      }, {});
      return [operation.operation, Object.assign(
        {},
        options,
        options.json_metadata != null ? { json_metadata: toString(options.json_metadata), } : {},
        options.download != null ? { download: toString(options.download), } : {},
        useCommentPermlink && options.permlink == null ? {
          permlink: formatter.commentPermlink(options.parent_author, options.parent_permlink),
        } : {}
      )];
  };

  creaBroadcast[operationName] =
    function creaBroadcast$specializedSend(wif, ...args) {
      debug(`Parsing operation "${operationName}" with`, {args});
      const options = operationParams.reduce((memo, param, i) => {
        memo[param] = args[i]; // eslint-disable-line no-param-reassign
        return memo;
      }, {});
      const callback = args[operationParams.length];
      return creaBroadcast[`${operationName}With`](wif, options, callback);
    };
});

const toString = obj => typeof obj === 'object' ? JSON.stringify(obj) : obj;
broadcastHelpers(creaBroadcast);

Promise.promisifyAll(creaBroadcast);

exports = module.exports = creaBroadcast;
