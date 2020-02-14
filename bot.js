const Twit = require('twit')
const config = require('./config');

const schedule = require('node-schedule');

var T = new Twit(config);
const reply = 'X1 lixo?';


var job = schedule.scheduleJob({ hour: 8, minute: 00 }, function(){
  T.get('search/tweets', 
 {
  q: 'yasuo lixo',
  count: 5,
  result_type: 'recent',
 },
 function(err, data, response) {
  data.statuses.forEach(element => {
    T.post('statuses/update',
    {
     status: reply,
     attachment_url: `https://twitter.com/${element.user.screen_name}/status/${element.id_str}`,
    })
  })
 });
});


