let ball = {
    X : 0,
    Y : 0,
    X2: 0,
    Y2: 0,
    O : 5,    
}
function myfunction(event){
    let key = event.key;
    if (key == "ArrowLeft"){
        ball.X -= ball.O;
    }
    else if (key == "ArrowRight"){
        ball.X += ball.O;
    }
    else if (key == "ArrowUp"){
        ball.Y -= ball.O;
    }
    else if (key == "ArrowDown"){
        ball.Y += ball.O;
    }
    document.getElementById("ball").style.paddingLeft = ball.X + "px";
    document.getElementById("ball").style.paddingTop = ball.Y + "px";
    document.getElementById("ball").style.paddingBottom = 0 + "px";
}
import { Graph } from '@antv/x6'

const graph = new Graph({
  container: document.getElementById('container'),
  grid: true,
})

graph.addNode({
  x: 10,
  y: 20,
  width: 360,
  height: 120,
  shape: 'text-block',
  text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  attrs: {
    body: {
      fill: '#efdbff',
      stroke: '#9254de',
      rx: 4,
      ry: 4,
    },
  },
})


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 80, 80);
console.log(ctx);