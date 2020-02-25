PIXI.utils.sayHello();

var renderer = new PIXI.Application({ transparent: true });

document.getElementById("display").appendChild(renderer.view);

// var stage = new PIXI.Container();

// PIXI.loader.add("images/pixie.jpg").load(setup);

// var pixie;

// function setup() {
//   pixie = new PIXI.Sprite(PIXI.loader.resources["images/pixie.jpg"].texture);

//   pixie.scale.set(0.5, 0.5);
//   pixie.x = renderer.width / 2;
//   pixie.y = renderer.height / 2;
//   pixie.anchor.set(0.5, 0.5);

//   stage.addChild(pixie);
//   renderer.render(stage);
// }

// Unrelated but important for code challenge: https://codepen.io/SkuliOskarsson/pen/ZbJKVW

// Suppose to be a transparent background
const pixie = PIXI.Sprite.from("images/pixie.jpg");

pixie.anchor.set(0.5);

pixie.x = renderer.screen.width / 2;
pixie.y = renderer.screen.height / 2;

renderer.stage.addChild(pixie);

add.ticker.add(() => {
  pixie.rotation += 0.1;
});
