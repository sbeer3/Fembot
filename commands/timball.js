const fs = require('fs');
const rn = require('./random.js');
module.exports = {
  command: 'timball',
  use: 'This posts random timgunn gifs',
  execute(msg) {

    var timGif = fs.readFileSync('./commands/tim.txt', 'ascii').split('\n');
    var rand = rn.randomNum(timGif.length);
    msg.channel.send(timGif[rand]);
  },
};