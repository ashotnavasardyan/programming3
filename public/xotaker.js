class Xotaker extends LivingCreature{
    constructor(x, y) {
        super(x,y);
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