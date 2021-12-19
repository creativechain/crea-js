# Crea.js
[![GitHub license](https://img.shields.io/badge/license-GPLv3-blue.svg)](https://github.com/creativechain/crea-js/blob/master/LICENSE)
![Version](https://img.shields.io/npm/v/@creativechain-fdn/crea-js.svg?style=flat&logo=npm)
![Downloads](https://img.shields.io/npm/dm/@creativechain-fdn/crea-js)

Crea.js the JavaScript API for Crea blockchain

# Documentation

- [Install](https://github.com/creativechain/crea-js/tree/master/doc#install)
- [Browser](https://github.com/creativechain/crea-js/tree/master/doc#browser)
- [Config](https://github.com/creativechain/crea-js/tree/master/doc#config)
- [Database API](https://github.com/creativechain/crea-js/tree/master/doc#api)
    - [Subscriptions](https://github.com/creativechain/crea-js/tree/master/doc#subscriptions)
    - [Tags](https://github.com/creativechain/crea-js/tree/master/doc#tags)
    - [Blocks and transactions](https://github.com/creativechain/crea-js/tree/master/doc#blocks-and-transactions)
    - [Globals](https://github.com/creativechain/crea-js/tree/master/doc#globals)
    - [Keys](https://github.com/creativechain/crea-js/tree/master/doc#keys)
    - [Accounts](https://github.com/creativechain/crea-js/tree/master/doc#accounts)
    - [Market](https://github.com/creativechain/crea-js/tree/master/doc#market)
    - [Authority / validation](https://github.com/creativechain/crea-js/tree/master/doc#authority--validation)
    - [Votes](https://github.com/creativechain/crea-js/tree/master/doc#votes)
    - [Content](https://github.com/creativechain/crea-js/tree/master/doc#content)
    - [Witnesses](https://github.com/creativechain/crea-js/tree/master/doc#witnesses)
- [Login API](https://github.com/creativechain/crea-js/tree/master/doc#login)
- [Follow API](https://github.com/creativechain/crea-js/tree/master/doc#follow-api)
- [Broadcast API](https://github.com/creativechain/crea-js/tree/master/doc#broadcast-api)
- [Broadcast](https://github.com/creativechain/crea-js/tree/master/doc#broadcast)
- [Auth](https://github.com/creativechain/crea-js/tree/master/doc#auth)


Here is full documentation:
https://github.com/creativechain/crea-js/tree/master/doc

## Browser
```html
<script src="./crea.min.js"></script>
<script>
crea.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## Webpack
[Please have a look at the webpack usage example.](https://github.com/creativechain/crea-js/blob/master/examples/webpack-example)

## Server
## Install
```
$ npm install crea --save
```

## RPC Servers
https://nodes.creary.net

## Examples
### Broadcast Vote
```js
var crea = require('crea');

var wif = crea.auth.toWif(username, password, 'posting');
crea.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
	console.log(err, result);
});
```

### Get Accounts
```js
crea.api.getAccounts(['ned', 'dan'], function(err, result) {
	console.log(err, result);
});
```

### Get State
```js
crea.api.getState('/trends/funny', function(err, result) {
	console.log(err, result);
});
```

### Reputation Formatter
```js
var reputation = crea.formatter.reputation(user.reputation);
console.log(reputation);
```

## Contributions
Patches are welcome! Contributors are listed in the package.json file. Please run the tests before opening a pull request and make sure that you are passing all of them. If you would like to contribute, but don't know what to work on, check the issues list or on Crea Chat channel #creajs https://creativechain.chat/channel/creajs.

## Issues
When you find issues, please report them!

## License
MIT
