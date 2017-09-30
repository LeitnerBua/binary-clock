var grid = [];

var clock;
var lampHours = [];

var seperator = [];

var cols = 6 * 2;
var rows = 6 * 2;

var cellWidth;
var cellHeight;

var margin = 3;

var textList;

function setup() {
    createCanvas(800, 800);

    for (var c = 0; c < cols; c++) {
        grid[c] = new Array(rows);
    }

    cellWidth = floor(width / cols);
    cellHeight = floor(height / rows);

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, cellWidth, cellHeight);
        }
    }

    clock = new Clock();
    frameRate(20);


    var lampList = [0, 0, 2, 4, 0, 3, 4, 0, 3, 4];
    // start column = 6
    // start row = 3

    for (var x = cols - 1; x >= cols - 10; x--) {
        var lamp = lampList[x];
        var xAchses = x * cellWidth + (floor(cellWidth / 2));
        for (var y = rows - margin; y > rows - margin - lamp; y--) {
            var yAchses = y * cellHeight + (floor(cellHeight / 2));
                lampHours.push(new Lamp(xAchses, yAchses));
                lampHours[lampHours.length-1].updateValue(y);
        }

        if (lamp === 0) {
            seperator.push([xAchses, cellHeight*(rows-margin-4+1), xAchses, cellHeight*(rows-margin+1)]);
        }
    }

    textList = initDigits();
    textAlign(CENTER);
    textSize(32);


}

function draw() {
    background(0);


    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j].show();
        }
    }

    clock.update();

    for (var l = 0; l < lampHours.length; l++) {
        lampHours[l].show(255);
    }

    for (var s = 0; s < seperator.length; s++) {
        stroke(255);
        line(seperator[s][0], seperator[s][1], seperator[s][2], seperator[s][3]);
    }

    for (var d = 0; d < textList.length; d++) {
        fill(255);
        text(textList[d][0], textList[d][1], textList[d][2]);
    }


}

function initDigits() {
    var textData = [];
    var textX = (cols -2)*cellWidth+(floor(cellWidth / 2));
    var digits = ["1", "2", "4", "8"];
    var digitsIndex = 0;

    for(var textY = rows-margin; textY > rows-margin-digits.length; textY--) {
        textData.push([digits[digitsIndex], textX, textY*cellHeight+(floor(cellHeight / 2) + 10)]);
        digitsIndex++;
    }

    return textData;
}
