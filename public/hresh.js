module.exports = class Hresh {
    constructor(x, y,ser,temp,stab = false) {
        this.stab = stab;
        this.x = x;
        this.y = y;
        this.temp = temp;
        this.ser = (Math.round(ser)==ser)?"arakan":"igakan";
        this.eat = 0;
        this.energy =10;
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
            matrix[this.y][this.x] = 0
        }

        this.x = norvandak[0];
        this.y = norvandak[1];
        matrix[norvandak[1]][norvandak[0]] = 6+(this.ser=="igakan"?0.5:0);
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
    var nor1 = this.yntrelvandak(3);
    if(nor1){
        nor[0] = nor1;
    }
    var nor2 = this.yntrelvandak(3.5);
    if(nor2){
        nor[1] = nor2;
    }
    var nor = nor[Math.round(Math.random())];
    if (!nor) {
        this.sharjvel();
    }
    else {
        if(this.stab){
            matrix[this.y][this.x] = 8;
            this.stab = false;
        }
        else{
            matrix[this.y][this.x] = 0
        }
      matrix[nor[1]][nor[0]] = 6;
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
        for (var i in gishatichner) {

            if (gishatichner[i].x == nor[0] && gishatichner[i].y == nor[1] && !gishatichner[i].stab) {

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

        var ser = Math.round(Math.random())/2;
        matrix[norvandak[1]][norvandak[0]] = 6+ser;
        var temp = Math.round(Math.random()*100);
        var hresh = new Hresh(norvandak[0], norvandak[1],ser,temp);
        hreshner.push(hresh);
    }
}




die() {
    if(this.stab){
        matrix[this.y][this.x] = 8;
    }
    else{
        matrix[this.y][this.x] = 0
    }
    for (var i in hreshner) {

        if (hreshner[i].x == this.x && hreshner[i].y == this.y) {


            hreshner.splice(i, 1);
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
