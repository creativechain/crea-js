var crea = require('../lib');

crea.api.getAccountCount(function(err, result) {
	console.log(err, result);
});

crea.api.getAccounts(['dan'], function(err, result) {
	console.log(err, result);
	var reputation = crea.formatter.reputation(result[0].reputation);
	console.log(reputation);
});

crea.api.getState('trending/creativechain', function(err, result) {
	console.log(err, result);
});

crea.api.getFollowing('ned', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

crea.api.getFollowers('dan', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

crea.api.streamOperations(function(err, result) {
	console.log(err, result);
});

crea.api.getDiscussionsByActive({
  limit: 10,
  start_author: 'thecastle',
  start_permlink: 'this-week-in-level-design-1-22-2017'
}, function(err, result) {
	console.log(err, result);
});
