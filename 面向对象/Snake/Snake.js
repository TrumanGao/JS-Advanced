// 控制按钮
const startBtnDom = document.querySelector("#start-btn");
const pauseBtnDom = document.querySelector("#pause-btn");

startBtnDom.addEventListener("click", startGame);
pauseBtnDom.addEventListener("click", pauseGame);

let timer;
// 点击开始
function startGame() {
  clearInterval(timer);
  timer = setInterval(() => {
    console.log("开始游戏");
  }, 300);
}
// 点击暂停
function pauseGame() {
  clearInterval(timer);
}

/**
 * 创建地图的构造函数
 * @params atom 像素大小
 * @params xnum 横向像素的数量，决定地图宽度
 * @params ynum 纵向像素的数量，决定地图高度
 */
function GameMap(atom, xnum, ynum) {
  this.atom = atom;
  this.xnum = xnum;
  this.ynum = ynum;

  this.canvas = null;
  // 创建地图画布
  this.create = function (app) {
    console.log("this", this);
    this.canvas = document.createElement("div");
    this.canvas.classList.add("game-map");
    this.canvas.style = `
    width: ${this.atom * this.xnum}px;
    height: ${this.atom * this.ynum}px;
    position: relative`;

    const appDom = document.querySelector(`#${app}`);
    appDom.appendChild(this.canvas);
  };
}

/**
 * 创建食物的构造函数
 * @parmas map 地图对象
 */
function GameFood(map) {
  this.width = map.atom;
  this.height = map.atom;
  this.bgcolor = `rgb(${Math.floor(Math.random() * 200)}, ${Math.floor(
    Math.random() * 200
  )}, ${Math.floor(Math.random() * 200)})`;

  this.xpos = Math.floor(Math.random() * map.xnum) * map.atom;
  this.ypos = Math.floor(Math.random() * map.ynum) * map.atom;
  this.flag = document.createElement("div");
  this.flag.style = `
width: ${this.width}px;
height: ${this.height}px;
background-color: ${this.bgcolor};
position: absolute;
left: ${this.xpos}px;
top: ${this.ypos}px;
`;
  console.log("this", this);
  map.canvas.appendChild(this.flag);
}

/**
 * 创建蛇的构造函数
 * @parmas map 地图对象
 */
function GameSnake(map) {
  this.width = map.atom;
  this.height = map.atom;
  // 设置蛇的运动方向
  this.direction = "right";

  this.body = [
    // 蛇头
    {
      x: 2,
      y: 0
    },
    // 蛇身
    {
      x: 1,
      y: 0
    },
    // 蛇尾
    {
      x: 0,
      y: 0
    }
  ];

  // 显示蛇
  this.display = function () {
    this.body.map((item, index) => {
      if (this.body[index].x !== null) {
        // ??? 当吃到食物时，x == null，不能新建，否则会在(0, 0)处新建
        let snakeDom = document.createElement("div");
        // 将蛇的节点保存在状态变量中，便于使用
        this.body[index].dom = snakeDom;

        snakeDom.style = `
        width: ${this.width}px;
        height: ${this.height}px;
        position: absolute;
        left: ${this.body[index].x * this.width}px;
        top: ${this.body[index].y * this.height}px;
        background-color: #000000;`;
        console.log("map", map);

        map.canvas.appendChild(snakeDom);
      }
    });
  };

  // 蛇运动方法
  this.run = function () {
    console.log("run", this);
  };
}

let gameMap = new GameMap(20, 40, 20);
gameMap.create("app");

let gameFood = new GameFood(gameMap);

let gameSnake = new GameSnake(gameMap);
gameSnake.display();
