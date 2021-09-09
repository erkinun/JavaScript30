const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')

let remaining = undefined

function clockFace(seconds) {
  const minutes = parseInt(seconds / 60)
  const remSeconds = seconds % 60

  return `${minutes}:${remSeconds}`
}

function beBackAt(seconds) {
  const now = Date.now()
  const then = new Date()
  then.setTime(now + seconds * 1000)

  return `Be back at ${then.getHours()}:${then.getMinutes()}`
}

let timeStarted = false

function timer(seconds) {
  remaining = seconds
  endTime.innerHTML = beBackAt(seconds)

  if (!timeStarted) {
    setInterval(() => {
      if (remaining > 0) {
        remaining = remaining - 1
      }

      timeLeft.innerHTML = clockFace(remaining)
    }, 1000)
    timeStarted = true
  }
}

const form = document.getElementById('custom')

function handleSubmit(e) {
  const remaining = form.elements['minutes'].value * 60
  timer(remaining)
  e.preventDefault()
}

function handleButtonClick(e) {
  timer(e.target.dataset['time'])
}

form.addEventListener('submit', handleSubmit)

const buttons = document.getElementsByTagName('button')
Array.from(buttons).forEach((b) => b.addEventListener('click', handleButtonClick))
