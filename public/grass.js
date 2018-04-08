class Grass extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.multiply = 0;
        this.toxic_time = 12;
        this.toxic = false;

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
    bazmanal() {
        this.multiply++;
        var norVandak = this.yntrelvandak(0);
        if (this.multiply >= 5 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            xoter.push(norXot);
            //console.log(norVandak);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}