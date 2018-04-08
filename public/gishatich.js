class Gishatich extends LivingCreature{
    constructor(x, y) {
        super(x,y);
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
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
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