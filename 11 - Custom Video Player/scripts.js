const video = document.querySelector('.player__video')
const player = document.querySelector('.player')
const progress = player.querySelector('.progress')
const playToggle = document.querySelector('.player__button')
const volume = document.querySelector('.player__slider')
const playbackRate = document.getElementsByName('playbackRate')[0]
const skipBack = document.querySelector('.skip-back-ten')
const skipFwd = document.querySelector('.skip-fwd-twentyfive')

function handleToggle(e) {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function handleVolume(e) {
  video.volume = e.target.value
}

function handleSpeed(e) {
  video.playbackRate = e.target.value
}

function skip(val) {
  const curTime = video.currentTime
  video.currentTime = curTime + val
}

function handleTimeUpdate(e) {
  const total = video.duration
  const current = e.target.currentTime
  const percentage = (current / total) * 100
  document.documentElement.style.setProperty('--progress', `${percentage}%`)
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

playToggle.addEventListener('click', handleToggle)
volume.addEventListener('input', handleVolume)
playbackRate.addEventListener('input', handleSpeed)
skipBack.addEventListener('click', () => skip(-10))
skipFwd.addEventListener('click', () => skip(25))
video.addEventListener('timeupdate', handleTimeUpdate)
progress.addEventListener('click', scrub)
