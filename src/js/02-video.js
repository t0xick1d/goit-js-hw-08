import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

KEY_TIME_UPDATE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(setActualTimeVideo, 1000));

updateActualTime();

function setActualTimeVideo(e) {
  localStorage.setItem(KEY_TIME_UPDATE, JSON.stringify(e));
}

function updateActualTime() {
  const savedTime = JSON.parse(localStorage.getItem(KEY_TIME_UPDATE));

  savedTime && player.setCurrentTime(actualTime.seconds);
}

