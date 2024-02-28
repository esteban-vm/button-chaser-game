import '@/game.css'

let score = 0
let aWidth: number
let aHeight: number
let timer: ReturnType<typeof setTimeout>
let iterations = 0

const gameArea = document.getElementById('gameArea')!
const dotButton = document.getElementById('dot')!
const scoreLabel = document.getElementById('scoreLabel')!

window.addEventListener('load', setGameAreaBounds)

function setGameAreaBounds() {
  aWidth = innerWidth
  aHeight = innerHeight
  aWidth -= 22
  aHeight -= 97
  gameArea.style.width = `${aWidth}px`
  gameArea.style.height = `${aHeight}px`
  dotButton.addEventListener('click', detectHit)
  aWidth -= 74
  aHeight -= 74
  moveDot()
}

function detectHit() {
  score++
  scoreLabel.innerHTML = `Score: ${score}`
}

function moveDot() {
  let x = Math.floor(Math.random() * aWidth)
  let y = Math.floor(Math.random() * aHeight)
  if (x < 10) x = 10
  if (y < 10) y = 10
  dotButton.style.left = `${x}px`
  dotButton.style.top = `${y}px`
  if (iterations < 30) {
    timer = setTimeout(moveDot, 1_000)
  } else {
    scoreLabel.innerHTML += '     Game Over!'
    dotButton.removeEventListener('click', detectHit)
    clearTimeout(timer)
  }
  iterations++
}
