{
  const player1={
    pos:0,
    change:0,
    object:document.getElementById('player-1'),
    margin: function() {
      return this.pos+'vh';
    },
    place: function(){
      this.object.style.marginTop = this.margin();
    }
  }
  const player2={
    pos:0,
    change:0,
    object:document.getElementById('player-2'),
    margin: function() {
      return this.pos+'vh';
    },
    place: function(){
      this.object.style.marginTop = this.margin();
    }
  }
  const ball = {
    pos:{
      x:20,
      y:60,
    },
    change:{
      x:2,
      y:2
    },
    style:document.getElementById('ball').style,
    place:function(){
      // this.style.paddingLeft = this.pos.x +'vw';
      // this.style.paddingTop = this.pos.y +'vh';
      console.log(this.pos.x+'vw');
      console.log(this.pos.y+'vh');
    }
  }
  function movestick(event){
    player1.change = 0;
    player2.change=0;
    if (event.key=='w'){
      player1.change = -5;
    }
    else if(event.key=="s"){
      player1.change = 5;
    }
    if (event.key=='ArrowUp'){
      player2.change = -5;
    }
    else if(event.key=="ArrowDown"){
      player2.change = 5;
    }
    player1.pos += player1.change;
    player2.pos += player2.change;
    if (player1.pos >=80){
      player1.pos = 80;
    }
    else if(player1.pos<=0){
      player1.pos=0;
    }
    if (player2.pos >=80){
      player2.pos = 80;
    }
    else if(player2.pos<=0){
      player2.pos=0;
    }
    player1.place();
    player2.place();
    // console.log(event);
  }
  // while(1){
  //   ball.pos.x += ball.change.x;
  //   if(ball.pos.x>=100){
  //     ball.change.x *= -1;
  //   }
  //   else if(ball.pos.x<=0){
  //     ball.change.x *= -1;
  //   }
  //   ball.place();
  // }
}