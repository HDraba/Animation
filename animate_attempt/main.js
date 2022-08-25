import './style.css';

const div = document.querySelector('div');
const moveBtn = document.getElementById('move-button');
const createBtn = document.getElementById('create-button');

const windowWidth = document.body.clientWidth;
const windowHeight = document.body.clientHeight;

class Chicken {
  // point = 0;
  color = Math.floor(Math.random() * 16777215).toString(16);
  constructor(speed, x, y, point, distance) {
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.point = point;
    this.distance = distance;
    this.chickenEl = this.create();
    this.move = this.move.bind(this);
  }

  create() {
    const newChicken = document.createElement('img');
    newChicken.setAttribute('src', 'https://illustoon.com/photo/3084.png');
    newChicken.style.boxShadow = `0 0 10px 10px #${this.color}`;
    newChicken.style.left = this.x + 'px';
    newChicken.style.top = this.y + 'px';
    div.appendChild(newChicken);
    return newChicken;
  }

  move() {
    console.log(this);
    if (this.point < this.distance) {
      this.chickenEl.style.transform = `translateX(${this.point}px)`;
      this.point = this.point + this.speed;
      requestAnimationFrame(this.move);
    }
  }
}

let speed = 10;
let x = 150;
let y = 100;
let point = 0;
// hardcoded "border"
let maxDistance = windowWidth - x - 10 - 85;

createBtn.addEventListener('click', () => {
  // speed x y point distance
  const newC = new Chicken(speed, x, y, point, maxDistance);
  const currentChickenEl = div.lastElementChild;
  currentChickenEl.addEventListener('click', () => {
    newC.move();
  });
});
