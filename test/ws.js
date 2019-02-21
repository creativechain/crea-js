let crea = require('../lib');

let apiOptions = {
  nodes: ['wss://nodes.creary.net']
};

crea.api.setOptions(apiOptions);

crea.api.getDynamicGlobalProperties(function (err, result) {
  console.log(err, result)
})
