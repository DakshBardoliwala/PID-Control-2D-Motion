class Bar {
  constructor(x, y, target) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.prev = p5.Vector.sub(target, this.pos);
    
    this.kp = 0.01;
    this.ki = 0.0001;
    this.kd = 2;
    
    this.i = createVector(0, 0);
    this.time = millis();
  }
  
  show() {
    strokeWeight(2);
    fill(255, 255, 255);
    ellipse(this.pos.x, this.pos.y, 50, 50);
  }
  
  update(target) {
    let err = p5.Vector.sub(target, this.pos);
    let force = createVector(0, 0);
    
    // Proportional
    force.add(p5.Vector.mult(err, this.kp));
    
    // Integral
    if (err.x >= -10 && err.x <= 10) {
      this.i.x = this.i.x + (this.ki * err.x);
    } else {
      this.i.x = 0;
    }
    if (err.y >= -10 && err.y <= 10) {
      this.i.y = this.i.y + (this.ki * err.y);
    } else {
      this.i.y = 0;
    }
    force.add(this.i);
    
    // Derivative
    let errDif = p5.Vector.sub(err, this.prev);
    force.add(p5.Vector.mult(errDif, (this.kd / (millis() - this.time))));
    this.time = millis();
    
    
    this.prev = err;
    
    // Updating Values
    this.acc = force;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.show();
  }
}




