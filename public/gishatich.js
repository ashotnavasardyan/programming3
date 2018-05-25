module.exports = class Gishatich extends LivingCreature{
    constructor(x, y,ser,temp,stab=false) {
        super(x,y);
        this.temp = temp;
        this.stab = stab;
        this.ser = (Math.round(ser)==ser)?"arakan":"igakan";
        this.eat = 0;
        this.energy = 30;
        this.multiply = 10;
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
            this.energy--;
        }
        else {
            if(this.stab){
                matrix[this.y][this.x] = 8;
                this.stab = false;
            }
            else{
                matrix[this.y][this.x] = 0
            }

            this.x = norvandak[0];
            this.y = norvandak[1];
            matrix[norvandak[1]][norvandak[0]] = 3;
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
            if (this.energy == 0) {
                this.die();
            }
            else {
                this.energy--;
            }
        }
    }

    utel() {
        var nor = [];
        var nor1 = this.yntrelvandak(2);
        if(nor1){
            nor[0] = nor1;
        }
        var nor2 = this.yntrelvandak(2.5);
        if(nor2){
            nor[1] = nor2;
        }
        var nor = nor[Math.round(Math.random())];
        if (!nor) {
            this.sharjvel();
        }
        else {


            for (var i in xotakerner) {

                if (xotakerner[i].x == nor[0] && xotakerner[i].y == nor[1] && !xotakerner[i].stab) {
                    if(this.stab){
                        matrix[this.y][this.x] = 8;
                        this.stab = false;
                    }
                    else{
                        matrix[this.y][this.x] = 0
                    }
                    matrix[nor[1]][nor[0]] = 3+(this.ser=="igakan"?0.5:0);
                    this.x = nor[0];
                    this.y = nor[1];
                    this.stanalnorkordinatner();
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
            var ser = Math.round(Math.random())/2;
            matrix[norvandak[1]][norvandak[0]] = 3+ser;
            var temp = Math.round(Math.random()*100);
            var gishatich = new Gishatich(norvandak[0], norvandak[1],ser,temp);
            gishatichner.push(gishatich);
        }
    }




    die() {
        if(this.stab){
            matrix[this.y][this.x] = 8;
            this.stab = false;
        }
        else{
            matrix[this.y][this.x] = 0
        }
        for (var i in gishatichner) {

            if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {


                gishatichner.splice(i, 1);
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