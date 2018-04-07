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