document.getElementById("display").appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader.add("images/pixi.png").load(setup);

var pixie;

function setup() {
  pixie = new PIXI.Sprite(PIXI.loader.resources["images/pixi.png"].texture);

  stage.addChild(pixie);
  renderer.render(stage);
}
