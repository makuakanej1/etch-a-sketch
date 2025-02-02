const grid = document.getElementById('container');

const gridSize = 640;

function createBoard(size) {
  const cellSize = gridSize / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.id = 'cell';
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.backgroundColor = 'white';
    cell.style.border = 'solid 2px aqua';

    grid.appendChild(cell);

    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
      cell.style.transition = '0.5s';
    });
  }
}

createBoard(16);

function resetBoard() {
  const cells = document.querySelectorAll('#cell');

  cells.forEach((cell) => {
    cell.style.backgroundColor = 'white';
  });
}
