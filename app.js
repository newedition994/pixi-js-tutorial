PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer(512, 512, {
  transparent: true,
  resolution: 1
});

document.getElementById("display").appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader.add("images/pixie.jpg").load(setup);

var pixie;

function setup() {
  pixie = new PIXI.Sprite(PIXI.loader.resources["images/pixie.jpg"].texture);

  stage.addChild(pixie);
  renderer.render(stage);
}
