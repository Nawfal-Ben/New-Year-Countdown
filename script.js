const days = document.getElementById("days-left")
const hours = document.getElementById("hours-left")
const minutes = document.getElementById("minutes-left")
const seconds = document.getElementById("seconds-left")
const nextYear = document.getElementById("next-year")
const loading = document.getElementById("loading")
const countdown = document.getElementById("countdown")

setInterval(() => {
    loading.style.display = "none"
    countdown.style.display = "flex"

    const dateNow = new Date()
    const nextYearDate = new Date(`01-01-${dateNow.getFullYear() + 1}`)
    const dateLeft = nextYearDate - dateNow
    const daysLeft = Math.floor(dateLeft / (1000*60*60*24))
    const hoursLeft = Math.floor((dateLeft % (1000*60*60*24)) / (1000*60*60))
    const minutesLeft = Math.floor((dateLeft % (1000*60*60)) / (1000*60))
    const secondsLeft = Math.floor((dateLeft % (1000*60)) / 1000)

    days.innerHTML = daysLeft.toString().padStart(2, '0')
    hours.innerHTML = hoursLeft.toString().padStart(2, '0')
    minutes.innerHTML = minutesLeft.toString().padStart(2, '0')
    seconds.innerHTML = secondsLeft.toString().padStart(2, '0')
    nextYear.innerHTML = nextYearDate.getFullYear()
}, 1000)