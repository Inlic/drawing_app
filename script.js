const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let size = 20
let color = 'black'
let x
let y

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

