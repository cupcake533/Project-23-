class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // boxBody = Bodies.rectangle(width/2 , 200 , 5 , {restitution:0.0, isStatic:true});
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
      MediaStreamTrackEvent.Body.setStatic(box,false);
      MediaStreamTrackEvent.Body.setStatic(box2,false);
      MediaStreamTrackEvent.Body.setStatic(box3,false);
    }
  };