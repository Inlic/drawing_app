const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let size = 20;

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2, true)
}