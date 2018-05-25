module.exports = class Xotaker{
    constructor(x, y,ser,temp,stab=false) {
        this.x = x;
        this.y = y;
        this.stab = stab;
        this.temp = temp;
        this.eat = 0;
        this.energy = 8;
        this.ser = (Math.round(ser)==ser)?"arakan":"igakan";
        this.directions = [];
        this.multiply = 8;
        this.bazm = false;

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
        var norvandak = empty[Math.round(Math.random()*(empty.length-1))];
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
            if(this.stab){
                matrix[this.y][this.x] = 8;
                this.stab = false;
            }
            else{
                matrix[this.y][this.x] = 0;
            }
            this.x = norvandak[0];
            this.y = norvandak[1];
            matrix[norvandak[1]][norvandak[0]] = 2+((this.ser=="igakan")?0.5:0);
            this.stanalnorkordinatner();
            if(this.ser = "igakan"){
                var arakan = this.yntrelvandak(2);
                if(arakan){
                    if(this.multiply >= 8){
                        this.bazmanal();
                        if(exanak == "ashun"){
                            this.bazmanal();
                        }
                        this.bazm = false;
                        this.multiply = 0;
                    }

                    this.bazm = true;
                }

            }
            if(this.bazm){
                this.multiply++;
            }
        }
    }

    utel() {

        var nor5 = this.yntrelvandak(5);
        var nor1 = this.yntrelvandak(1);
        var posit = [];
        posit[0] = nor5;
        posit[1] = nor1;
        var rand = Math.round(Math.random()*(posit.length-1));
        var nor = posit[rand];

        if (!nor) {
            if(rand ==1){nor = posit[0];}
            else if(rand==0){nor = posit[1];}
        }

        if(!nor) {
            this.sharjvel();
        }
        else {
            if(this.stab){
                matrix[this.y][this.x] = 8;
                this.stab = false;
            }
            else{matrix[this.y][this.x] = 0
            }
            matrix[nor[1]][nor[0]] = 2+((this.ser=="igakan")?0.5:0);
            if(this.ser = "igakan"){
                var arakan = this.yntrelvandak(2);
                if(arakan){
                    if(this.multiply >= 8){
                        this.bazmanal();
                        if(exanak == "ashun"){
                            this.bazmanal();
                        }
                        this.bazm = false;
                        this.multiply = 0;
                    }

                    this.bazm = true;
                }

            }
            if(this.bazm){
                this.multiply++;
            }
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


            this.energy = 8;
            this.eat++;
            if (this.eat >= 8) {
                this.bazmanal();
                if(exanak == "ashun"){
                    this.bazmanal();
                }

                this.eat = 0;
            }





        }
    }

    bazmanal() {
        if (exanak !== "dzmer") {
            var norvandak = this.yntrelvandak(1);
            if (norvandak) {
                for (var i in xoter) {
                    if (xoter[i].x == norvandak[0] && xoter[i].y == norvandak[1]) {
                        xoter.splice(i, 1);
                    }
                }

                var ser = Math.round(Math.random()) / 2;
                matrix[norvandak[1]][norvandak[0]] = 2 + ser;
                var temp = Math.round(Math.random()*100);
                var norxotaker = new Xotaker(norvandak[0], norvandak[1], ser,temp);
                xotakerner.push(norxotaker);

            }
        }
    }



    die() {
        if(this.stab){
            matrix[this.y][this.x] = 8;
        }
        else{
            matrix[this.y][this.x] = 0
        }
        for (var i in xotakerner) {

            if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {


                xotakerner.splice(i, 1);
                break;
            }

        }


    }
        taqacum(){
            if(this.temp < temprature){
                this.die();
            }
        }
};