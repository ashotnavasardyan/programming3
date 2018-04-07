class Hresh {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.eat = 0;
        this.energy =30;

    }

    stanalnorkordinatner() {
        return this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x-2, this.y-2],
            [this.x-1, this.y-2],
            [this.x, this.y-2],
            [this.x+1, this.y-2],
            [this.x+2, this.y-2],
            [this.x-2, this.y-1],
            [this.x+2, this.y-1],
            [this.x-2, this.y],
            [this.x+2, this.y],
            [this.x-2, this.y+1],
            [this.x+2, this.y+1],
            [this.x-2, this.y+2],
            [this.x-1, this.y+2],
            [this.x, this.y+2],
            [this.x+1, this.y+2],
            [this.x+2, this.y+2],
        ];
    }
yntrelvandak(n) {
    this.directions = this.stanalnorkordinatner();
    var empty = [];
    for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == n) {
                empty.push(this.directions[i]);
            }
        }
    }
    var norvandak = random(empty);
    return norvandak;
}
sharjvel() {


    var norvandak = this.yntrelvandak(0);
    if (this.energy == 0) {
        this.die();
    }
    if (!norvandak) {
        if (this.energy <= 0) {
            this.die();
        }
        this.energy--;
    }
    else {
        matrix[this.y][this.x] = 0;

        this.x = norvandak[0];
        this.y = norvandak[1];
        matrix[norvandak[1]][norvandak[0]] = 6;
        this.stanalnorkordinatner();
        if (this.energy == 0) {
            this.die();
        }
        else {
            this.energy--;
        }
    }
}

utel() {
    var nor = this.yntrelvandak(3);
    if (!nor) {
        this.sharjvel();
    }
    else {
      matrix[this.y][this.x] = 0;
      matrix[nor[1]][nor[0]] = 6;
        for (var i in gishatichner) {

            if (gishatichner[i].x == nor[0] && gishatichner[i].y == nor[1]) {

                  this.x = nor[0];
                  this.y = nor[1];
                  this.stanalnorkordinatner();
                  gishatichner.splice(i, 1);


            }

        }



        this.eat++;
        if (this.eat >= 4) {
            this.bazmanal();
            this.eat = 0;
        }





    }
}

bazmanal() {
    var norvandak = this.yntrelvandak(0);
    if (norvandak) {
        matrix[norvandak[1]][norvandak[0]] = 6;
        var hresh = new Hresh(norvandak[0], norvandak[1]);
        hreshner.push(hresh);
    }
}




die() {
    matrix[this.y][this.x] = 0;
    for (var i in hreshner) {

        if (hreshner[i].x == this.x && hreshner[i].y == this.y) {


            hreshner.splice(i, 1);
            break;
        }

    }

}
}
