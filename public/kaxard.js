module.exports = class Kaxard extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 30;
        this.directions = [];
        var xot = new Grass(this.x, this.y);
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

    yntrelvandak(n) {
        this.directions = this.stanalnorkordinatner();
        var empty = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] !== 5) {
                if (matrix[y][x] == n) {
                    empty.push(this.directions[i]);
                }
            }
        }
        var norvandak = empty[Math.round(Math.random()*(empty.length-1))];
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
            for (p in xoter) {
                if (xoter[p].y == this.y && xoter[p].x == this.x) {
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
};