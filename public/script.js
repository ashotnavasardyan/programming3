var m = 20//prompt('Your m');
var n = 20 //prompt('Your n');

var matrix = [];

for (i = 0; i < n; i++) {
  matrix[i] = [];
  for (z = 0; z < m; z++) {
    var num = Math.round(Math.random());
    matrix[i][z] = num
  }
}
var rand = Math.round(Math.random() * m * n / 5);

for (p = 0; p <= rand; p++) {
  var randx = Math.round(Math.random() * m);
  var randy = Math.round(Math.random() * n);
  if (randx >= m) {
    randx--;
  }
  if (randy >= n) {
    randy--;
  }

  matrix[randx][randy] = 2;
}

var rand = Math.round(Math.random() * m * n / 10);

for (p = 0; p <= rand; p++) {
  var randx = Math.round(Math.random() * m);
  var randy = Math.round(Math.random() * n);
  if (randx >= m) {
    randx--;
  }
  if (randy >= n) {
    randy--;
  }

  matrix[randx][randy] = 3;
}

var rand = Math.round(Math.random() * m * n / 40);

for (p = 0; p <= rand; p++) {
  var randx = Math.round(Math.random() * m);
  var randy = Math.round(Math.random() * n);
  if (randx >= m) {
    randx--;
  }
  if (randy >= n) {
    randy--;
  }

  matrix[randx][randy] = 4;
}

var rand = Math.round(Math.random() * m * n / 15);

for (p = 0; p <= rand; p++) {
  var randx = Math.round(Math.random() * m);
  var randy = Math.round(Math.random() * n);
  if (randx >= m) {
    randx--;
  }
  if (randy >= n) {
    randy--;
  }

  matrix[randx][randy] = 6;
}



var side = 30;

var xoter = [];
var xotakerner = [];
var gishatichner = [];
var kaxardner = [];
var hreshner = [];
function setup() {
  frameRate(4);
  createCanvas(1000, 1000);
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        var xot = new Grass(x, y);
        xoter.push(xot);
      }
      if (matrix[y][x] == 2) {
        var xotaker = new Xotaker(x, y);
        xotakerner.push(xotaker);
      }
      if (matrix[y][x] == 3) {
        var gishatich = new Gishatich(x, y);
        gishatichner.push(gishatich);
      }
      if (matrix[y][x] == 4) {
        var kaxard = new Kaxard(x, y);
        kaxardner.push(kaxard);
      }
      if (matrix[y][x] == 6) {
        var hresh = new Hresh(x, y);
        hreshner.push(hresh);
      }
    }
  }


}


function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill('MediumSeaGreen');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 2) {
        fill('Orange');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        fill('Gray');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 4) {
        fill('Violet');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 5) {
        fill('DodgerBlue');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 6) {
        fill('SlateBlue');
        rect(x * side, y * side, side, side);
      }
      else {
        fill('#FFF8DC');
        rect(x * side, y * side, side, side);
      }
    }
  }


  for (var i in xoter) {
    xoter[i].bazmanal();
    xoter[i].toxic_func();
  }
  for (var n in xotakerner) {
    xotakerner[n].utel();

  }
  for (var z in gishatichner) {
    gishatichner[z].utel();
  }

  for (var e in kaxardner) {
    kaxardner[e].sharjvel();
  }
  for (var i in hreshner) {
    hreshner[i].utel();
  }


}
