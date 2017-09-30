function Clock() {

  this.seconds = 0;
  this.minutes = 0;
  this.hours = 0;

  this.update = function() {
    this.seconds = second().toString().split("").map(Number);
    this.minutes = minute().toString().split("").map(Number);
    this.hours = hour().toString().split("").map(Number);

    console.log(this.seconds);
  };
}
