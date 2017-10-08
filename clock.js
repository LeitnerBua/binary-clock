function Clock(x, y) {
	this.radius = 25;
	this.pos = createVector(x, y);

	this.color = 255;

	this.show = function(areaX, areaY) {

		push();
		translate(areaX, areaY);
		fill(this.color);
		ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
		pop();

	}
}