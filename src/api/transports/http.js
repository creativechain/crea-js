import fetch from 'cross-fetch';
import newDebug from 'debug';
import Transport from './base';

const debug = newDebug('crea:http');

class RPCError extends Error {
  constructor(rpcError) {
    super(rpcError.message);
    this.name = 'RPCError';
    this.code = rpcError.code;
    this.data = rpcError.data;
  }
}

export function jsonRpc(uri, {method, id, params}) {
  const payload = {id, jsonrpc: '2.0', method, params};
  return fetch(uri, {
    body: JSON.stringify(payload),
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP ${ res.status }: ${ res.statusText }`);
    }
    return res.json();
  }).then(rpcRes => {
    if (rpcRes.id !== id) {
      throw new Error(`Invalid response id: ${ rpcRes.id }`);
    }
    if (rpcRes.error) {
      throw new RPCError(rpcRes.error);
    }
    return rpcRes.result
  });
}

export default class HttpTransport extends Transport {
  send(api, data, callback) {
    if (this.options.useAppbaseApi) {
        api = 'condenser_api';
    }
    debug('Crea::send', api, data);
    const id = data.id || this.id++;
    const params = data.params;

    if (this.options.nodes.length) {
      const MAX = this.options.nodes.length - 1;
      const nodeId = Math.floor(Math.random() * (MAX - 0 + 1)) + 0;
      const uri = this.options.nodes[nodeId];

      jsonRpc(uri, {method: api + '.' + data.method, id, params})
        .then(res => { callback(null, res) }, err => { callback(err) })
    } else {
      throw new Error('No configured nodes');
    }

  }
}
