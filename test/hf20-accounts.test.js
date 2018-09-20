import Promise from 'bluebird';
import should from 'should';
import crea from '../src';

const username = process.env.CREA_USERNAME || 'guest123';
const password = process.env.CREA_PASSWORD;
const activeWif = crea.auth.toWif(username, password, 'active');

describe('crea.hf20-accounts:', () => {
  it('has generated methods', () => {
    should.exist(crea.broadcast.claimAccount);
    should.exist(crea.broadcast.createClaimedAccount);
  });

  it('has promise methods', () => {
    should.exist(crea.broadcast.claimAccountAsync);
    should.exist(crea.broadcast.createClaimedAccountAsync);
  });


  describe('claimAccount', () => {

    it('signs and verifies auth', function(done) {
      let tx = {
        'operations': [[
          'claim_account', {
            'creator': username,
            'fee': '0.000 TESTS'}]]
      }

      crea.api.callAsync('condenser_api.get_version', []).then((result) => {
        result.should.have.property('blockchain_version');
        if(result['blockchain_version'] < '0.21.0') return done(); /* SKIP */
        result.should.have.property('blockchain_version', '0.21.0')

        crea.broadcast._prepareTransaction(tx).then(function(tx){
          tx = crea.auth.signTransaction(tx, [activeWif]);
          crea.api.verifyAuthorityAsync(tx).then(
            (result) => {result.should.equal(true); done();},
            (err)    => {done(err);}
          );
        });
      });

    });

    it('claims and creates account', function(done) {
      this.skip(); // (!) need test account with enough RC

      crea.api.callAsync('condenser_api.get_version', []).then((result) => {
        result.should.have.property('blockchain_version');
        if(result['blockchain_version'] < '0.21.0') return done(); /* SKIP */
        result.should.have.property('blockchain_version', '0.21.0')

        crea.broadcast.claimAccountAsync(activeWif, username, '0.000 TESTS', []).then((result) => {
            let newAccountName = username + '-' + Math.floor(Math.random() * 10000);
            let keys = crea.auth.generateKeys(
                username, password, ['posting', 'active', 'owner', 'memo']);

            crea.broadcast.createClaimedAccountAsync(
                activeWif,
                username,
                newAccountName,
                keys['owner'],
                keys['active'],
                keys['posting'],
                keys['memo'],
                {}, []
              ).then((result) => {
                should.exist(result);
                done();
            }, (err) => {done(err)});
        }, (err) => {done(err)});
      });
    });

  });
});
