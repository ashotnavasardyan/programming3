module.exports = class Grass extends LivingCreature{
    constructor(x, y,temp) {
        super(x,y);
        this.temp = temp;
        this.multiply = 0;
        this.toxic_time = 12;
        this.toxic = false;
        this.time = (exanak=="garun")?1:6;

    }
    toxic_func() {
        if (this.toxic == true) {
            if (this.toxic_time == 0) {
                this.toxic = false;
                matrix[this.y][this.x] = 1;
            }
            else {
                this.toxic_time--;
            }
        }
    }
    //  
    bazmanal() {
        this.multiply++;
        var norVandak = this.yntrelvandak(0);
        if (this.multiply >= this.time  && norVandak) {
            var temp = Math.round(Math.random()*100);
            var norXot = new Grass(norVandak[0], norVandak[1],temp);
            xoter.push(norXot);
            //console.log(norVandak);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
    taqacum(){
        if(this.temp < temprature){
            matrix[this.y][this.x] = 0;
        for (var i in xoter) {

            if (xoter[i].x == this.x && xoter[i].y == this.y) {


                xoter.splice(i, 1);
                break;
            }
        }
    }
    }
};