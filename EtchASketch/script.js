var mouseDown = false;
document.body.onmousedown = function() {
  mouseDown = true;
};
document.body.onmouseup = function() {
  mouseDown = false;
};
const gridElement = document.querySelector('.grid-container');
gridElement.childNodes.forEach(node => {
  const nodeCheckbox = node
})

function createCanvas(gridSize = 16) {
  for (let j = 0; j < gridSize; j++) {
    for (let i = 0; i < gridSize; i++) {
      var gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      // gridItem.textContent = i;
      gridElement.appendChild(gridItem);
    }
  }
  gridElement.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
}
function toggleGridItem() {
  if (mouseDown) {
    this.style.backgroundColor = '#000';
  }
}
createCanvas();
console.dir(gridElement);
gridElement.childNodes.forEach(node => {
  node.addEventListener('mouseover', toggleGridItem);
});
