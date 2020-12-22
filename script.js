const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let size = 20
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
  }
})

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2, true)
  context.fillStyle = color
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath()
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.strokeStyle = color
  context.lineWidth = size
  context.stroke()
}

