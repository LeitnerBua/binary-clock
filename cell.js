function Cell(x, y, width, height) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.pos = createVector(this.x*this.width, this.y*this.height);


  this.show = function() {
    stroke(255);
    strokeWeight(0.2);
    fill(0);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  };

}
