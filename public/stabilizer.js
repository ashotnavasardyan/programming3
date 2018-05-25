module.exports = class Stabilizer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] !== 5) {
                if (matrix[y][x] == n) {
                    empty.push(this.directions[i]);
                }
            }
        }
        var norvandak = empty[Math.round(Math.random() * (empty.length - 1))];
        return norvandak;
    }

    stabil() {

        if (xotakerner.length == 0) {
            for (i = 0; i < 2; i++) {
                var norvandak = this.yntrelvandak(8);
                if(norvandak) {
                    var ser = Math.round(Math.random()) / 2;
                    matrix[norvandak[1]][norvandak[0]] = 2 + ser;
                    var temp = Math.round(Math.random() * 100);
                    var norxotaker = new Xotaker(norvandak[0], norvandak[1], ser, temp, true);
                    xotakerner.push(norxotaker);
                }
            }
        }
        if (hreshner.length == 0) {
            for (i = 0; i < 2; i++) {
                var norvandak = this.yntrelvandak(8);
                if(norvandak) {
                    var ser = Math.round(Math.random()) / 2;
                    matrix[norvandak[1]][norvandak[0]] = 6 + ser;
                    var temp = Math.round(Math.random() * 100);
                    var hresh = new Hresh(norvandak[0], norvandak[1], ser, temp, true);
                    hreshner.push(hresh);
                }
            }
        }

        if (gishatichner.length == 0) {
            for (i = 0; i < 2; i++) {
                var norvandak = this.yntrelvandak(8);
                if(norvandak) {
                    var ser = Math.round(Math.random()) / 2;
                    matrix[norvandak[1]][norvandak[0]] = 3 + ser;
                    var temp = Math.round(Math.random() * 100);
                    var gishatich = new Gishatich(norvandak[0], norvandak[1], ser, temp, true);
                    gishatichner.push(gishatich);
                }
            }
        }

    }
}


