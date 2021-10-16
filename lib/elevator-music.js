const player = require('play-sound')(opts = {})
const musicFile = __dirname + '/../sounds/elevator-music.mp3';
const bellFile = __dirname + '/../sounds/bell.mp3';

var playIndefinitely = true;
var audio = undefined;

function playMP3() {
  audio = player.play(musicFile,(error) => {
    if(error === null && playIndefinitely) {
      playMP3();
    }
  });
}

function playBell() {
  killAudio();
  audio = player.play(bellFile);
}

function killAudio() {
  if (audio) {
    audio.kill();
  }
}

module.exports = {
  start: function() {
    killAudio();
    playIndefinitely = true;
    playMP3();
  },
  stop: function() {
    playIndefinitely = false;
    killAudio();
    playBell();
  }
};
