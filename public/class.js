class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.toxic_time = 12;
        this.toxic = false;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];



    }
    toxic_func(){
      if(this.toxic == true){
        if(this.toxic_time == 0){
          this.toxic = false;
          matrix[this.y][this.x] = 1;
        }
        else {
          this.toxic_time--;
        }
      }
    }
    select(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.select(0));
        if (this.multiply >= 5 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            xoter.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}


class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.eat = 0;
        this.energy = 8;
        this.directions = [];

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
            [this.x + 1, this.y + 1]
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
            matrix[norvandak[1]][norvandak[0]] = 2;
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
        var nor5 = this.yntrelvandak(5);
        var nor1 = this.yntrelvandak(1);
        var posit = [];
        posit[0] = nor5;
        posit[0] = nor1;
        var nor = random(posit);
        if (!nor) {
            this.sharjvel();
        }
        else {
          matrix[this.y][this.x] = 0;
          matrix[nor[1]][nor[0]] = 2;
            for (var i in xoter) {

                if (xoter[i].x == nor[0] && xoter[i].y == nor[1]) {
                    if(xoter[i].toxic == true){
                        this.die();
                        xoter[i].toxic = false;
                        matrix[nor[1]][nor[0]] = 1;
                    }
                    else{
                      this.x = nor[0];
                      this.y = nor[1];
                      this.stanalnorkordinatner();
                      xoter.splice(i, 1);

                  }
                }

            }



            this.eat++;
            if (this.eat >= 8) {
                this.bazmanal();
                this.eat = 0;
            }





        }
    }

    bazmanal() {
        var norvandak = this.yntrelvandak(1);
        if (norvandak) {
            for (var i in xoter) {
                if (xoter[i].x == norvandak[0] && xoter[i].y == norvandak[1]) {
                    xoter.splice(i, 1);
                }
            }
            matrix[norvandak[1]][norvandak[0]] = 2;

            var norxotaker = new Xotaker(norvandak[0], norvandak[1]);
            xotakerner.push(norxotaker);

        }

    }




    die() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerner) {

            if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {


                xotakerner.splice(i, 1);
                break;
            }

        }


    }
}



class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.eat = 0;
        this.energy = 30;

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
        matrix[norvandak[1]][norvandak[0]] = 3;
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
    var nor = this.yntrelvandak(2);
    if (!nor) {
        this.sharjvel();
    }
    else {
      matrix[this.y][this.x] = 0;
      matrix[nor[1]][nor[0]] = 3;
        for (var i in xotakerner) {

            if (xotakerner[i].x == nor[0] && xotakerner[i].y == nor[1]) {

                  this.x = nor[0];
                  this.y = nor[1];
                  this.stanalnorkordinatner();
                  xotakerner.splice(i, 1);


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
        matrix[norvandak[1]][norvandak[0]] = 3;
        var gishatich = new Gishatich(norvandak[0], norvandak[1]);
        gishatichner.push(gishatich);
    }
}




die() {
    matrix[this.y][this.x] = 0;
    for (var i in gishatichner) {

        if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {


            gishatichner.splice(i, 1);
            break;
        }

    }


}
}
class Kaxard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.directions = [];
        var xot = new Grass(this.x,this.y);
        xoter.push(xot);
        xot.toxic = true;
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
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] !==5) {
                if (matrix[y][x] == n) {
                    empty.push(this.directions[i]);
                }
            }
        }
        var norvandak = random(empty);
        return norvandak;
    }
    sharjvel() {
        var norvandak = this.yntrelvandak(1);
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
            for(p in xoter){
              if(xoter[p].y == this.y && xoter[p].x == this.x){
                  xoter[p].toxic = true;
                matrix[this.y][this.x] = 5;
                  break;
              }
            }
            this.x = norvandak[0];
            this.y = norvandak[1];
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.stanalnorkordinatner();
            if (this.energy == 0) {
                this.die();
            }
            else {
                this.energy--;
            }
        }
    }

    die() {
        for (var i in kaxardner) {
            if (kaxardner[i].x == this.x && kaxardner[i].y == this.y) {
                kaxardner.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 1;
    }
}

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
