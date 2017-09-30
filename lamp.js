function Lamp(x, y) {
  this.radius = 25;
  this.pos = createVector(x, y);

  this.margin = 20;

  this.on = false;

  this.value = 0;

  this.show = function(color) {
    fill(color);
    stroke(255);
    strokeWeight(3);

    ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);

  };

  this.updateValue = function(currentRow) {
    if(currentRow === 9) {
      this.value = 1;
    } else if (currentRow === 8) {
      this.value = 2;
    } else if (currentRow === 7) {
      this.value = 4;
    } else if (currentRow === 6) {
      this.value = 8;
    }
  };
}
