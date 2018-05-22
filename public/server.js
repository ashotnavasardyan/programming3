var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
global.LivingCreature = require("./LivingCreature");
global.Gishatich = require("./gishatich");
global.Grass = require("./grass");
global.Hresh = require("./hresh");
global.Kaxard = require("./kaxard");
global.Xotaker = require("./xotaker");
global.xoter = [];
global.xotakerner = [];
global.gishatichner = [];
global.temprature = 50;
global.kaxardner = [];
global.hreshner = [];
global.exanak = 0;
// var xoter_stat = [];
// var xotaker_stat = [];
// var gishatich_stat = [];
app.use(express.static("."));
server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

io.on('connection', function () {
    main();
});
io.on('continue',main);
 function main(){
     var size = [30, 30];
         matrix = [];
         for (i = 0; i < size[1]; i++) {
             matrix[i] = [];
             for (z = 0; z < size[0]; z++) {
                 var num = Math.round(Math.random());
                 matrix[i][z] = num;
             }
         }
     var rand = Math.round(Math.random() * size[0] * size[1] / 4);

     for (p = 0; p <= rand; p++) {
         var randx = Math.round(Math.random() * size[0]);
         var randy = Math.round(Math.random() * size[1]);
         if (randx >= size[0]) {
             randx--;
         }
         if (randy >= size[1]) {
             randy--;
         }
         var ser = Math.round(Math.random())/2;
         matrix[randx][randy] = 2+ser;
     }

     var rand = Math.round(Math.random() * size[0] * size[1] / 20);

     for (p = 0; p <= rand; p++) {
         var randx = Math.round(Math.random() * size[0]);
         var randy = Math.round(Math.random() * size[1]);
         if (randx >= size[0]) {
             randx--;
         }
         if (randy >= size[1]) {
             randy--;
         }
         var ser = Math.round(Math.random())/2;
         matrix[randx][randy] = 3+ser;
     }

     var rand = Math.round(Math.random() * size[0] * size[1] / 40);
     //
     for (p = 0; p <= rand; p++) {
         var randx = Math.round(Math.random() * size[0]);
         var randy = Math.round(Math.random() * size[1]);
         if (randx >= size[0]) {
             randx--;
         }
         if (randy >= size[1]) {
             randy--;
         }

         matrix[randx][randy] = 4;
     }

     var rand = Math.round(Math.random() * size[0] * size[1] / 40);

     for (p = 0; p <= rand; p++) {
         var randx = Math.round(Math.random() * size[0]);
         var randy = Math.round(Math.random() * size[1]);
         if (randx >= size[0]) {
             randx--;
         }
         if (randy >= size[1]) {
             randy--;
         }
         var ser = Math.round(Math.random())/2;
         matrix[randx][randy] = 6+ser;
     }
     xoter = [];
     xotakerner = [];
     gishatichner = [];
     kaxardner = [];
     hreshner = [];
     for (var y = 0; y < matrix.length; y++) {
         for (var x = 0; x < matrix[y].length; x++) {
             if (matrix[y][x] == 1) {
                 var temp = Math.round(Math.random()*100);
                 var xot = new Grass(x, y,temp);
                 xoter.push(xot);
             }
             if (matrix[y][x] == 2 || matrix[y][x] == 2.5) {
                 var temp = Math.round(Math.random()*100);
                 var xotaker = new Xotaker(x, y, matrix[y][x],temp);
                 xotakerner.push(xotaker);
             }
             if (matrix[y][x] == 3 || matrix[y][x] == 3.5) {
                 var temp = Math.round(Math.random()*100);
                 var gishatich = new Gishatich(x, y, matrix[y][x],temp);
                 gishatichner.push(gishatich);
             }
             if (matrix[y][x] == 4) {
                 var kaxard = new Kaxard(x, y, matrix[y][x],temp);
                 kaxardner.push(kaxard);
             }
             if (matrix[y][x] == 6 || matrix[y][x] == 6.5) {
                 var temp = Math.round(Math.random()*100);
                 var hresh = new Hresh(x, y, matrix[y][x],temp);
                 hreshner.push(hresh);
             }
         }
     }

     // console.log(hreshner);
     // console.log(kaxardner);
     // console.log(xotakerner);
     // console.log(xoter);
     // console.log(gishatichner);
     // console.log(matrix);
     // var arr = [matrix,hreshner,kaxardner,xotakerner,xoter,gishatichner];
     // matrix = [ [ 1, 1, 1, 1, 0, 0, 0, 2, 1, 1 ],
     //     [ 1, 1, 0, 2.5, 1, 2.5, 5, 2.5, 2, 0 ],
     //     [ 0, 1, 0, 0, 0, 1, 1, 0, 2, 2 ],
     //     [ 1, 1, , 1, 1, 2, 0, 0, 1, 2.5 ],
     //     [ 1, 2, 2.5, 1, 0, 0, 0, 1, 0, 1 ],
     //     [ 1, 0, 1, 1, 0, 0, 1, 5, 0, 0 ],
     //     [ 1, 1, 0, 0, 1, 2.5, 2, 1, 0, 0 ],
     //     [ 1, 1, 0, 5, 1, 0, 1, 2, 1, 0 ],
     //     [ 0, 0, 1, 0, 0, 1, 0, 1, 0, 1 ],];


     graphic();
     startGame(matrix,size);
 }

function graphic() {
    fs.readFile('xoter_stat.json', 'utf8', function (err, data) {
        if (err) throw err;
        var dat = JSON.parse(data);

        var xoter_length = Object.keys(dat.xoter_stat).length;
        var xotaker_length = Object.keys(dat.xotaker_stat).length;
        var gishatich_length =  Object.keys(dat.gishatich_stat).length;
        var kaxard_length =  Object.keys(dat.kaxard_stat).length;
        var hresh_length =  Object.keys(dat.hresh_stat).length;

        var xoter_name = ++xoter_length;
        var xoter_obj = {};
        xoter_obj[xoter_name] = xoter.length;
        dat.xoter_stat.push(xoter_obj);

        var xotaker_name = ++xotaker_length;
        var xotaker_obj = {};
        xotaker_obj[xotaker_name] = xotakerner.length;
        dat.xotaker_stat.push(xotaker_obj);

        var gishatich_name = ++gishatich_length;
        var gishatich_obj = {};
        gishatich_obj[gishatich_name] = gishatichner.length;
        dat.gishatich_stat.push(gishatich_obj);

        var kaxard_name = ++kaxard_length;
        var kaxard_obj = {};
        kaxard_obj[kaxard_name] = kaxardner.length;
        dat.kaxard_stat.push(kaxard_obj);

        var hresh_name = ++hresh_length;
        var hresh_obj = {};
        hresh_obj[hresh_name] = hreshner.length;
        dat.hresh_stat.push(hresh_obj);

        fs.writeFile('xoter_stat.json',JSON.stringify(dat),function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        console.log(xoter_length + " "+ xotaker_length + " " +gishatich_length);

        io.emit('graphic',dat);
    });
}
function startGame(matrix,size) {

    var time = 0;

    setInterval(gameFunc, 2000);

    function gameFunc() {
        // console.log(xotakerner);
        if (exanak == "dzmer") {
            if(time%3 ==0) {
                for (var n in xotakerner) {
                    xotakerner[n].utel();
                }
            }
        }
        else if (exanak == "ashun") {
            for (var i in xoter) {
                xoter[i].bazmanal();
                xoter[i].toxic_func();
            }
            terevatap();
            for (var n in xotakerner) {
                xotakerner[n].utel();

            }
        }
        else if (exanak == "garun") {
            for (var i in xoter) {
                xoter[i].bazmanal();
                xoter[i].toxic_func();
            }
            for(i=0;i<2;i++){
                for (var n in xotakerner) {
                    xotakerner[n].utel();
                }
            }
        }
        else {
            for (var i in xoter) {
                xoter[i].bazmanal();
                xoter[i].toxic_func();
            }
            for (var n in xotakerner) {
                xotakerner[n].utel();
            }
            for (var z in gishatichner) {
                gishatichner[z].utel();
            }
        }

        for (var z in gishatichner) {
            gishatichner[z].utel();
        }

        for (var e in kaxardner) {
            kaxardner[e].sharjvel();
        }
        for (var i in hreshner) {
            hreshner[i].utel();
        }

        switch (time) {
            case 0:
                exanak = "ashun";
                break;
            case 10:
                exanak = "dzmer";
                break;
            case 20:
                exanak = "garun";
                break;
            case 30:
                exanak = "amar";
                break;
            default:
        }
        if (time > 40) {
            time = -1;
        }
        if (time >= 30 && time <= 33) {
                temprature = Math.round(Math.random() * 100);
                global_taqacum();
        }
        time++;
        // console.log(time);
        // console.log(exanak);
        io.emit("matrix", matrix, exanak,size,xoter,temprature);
    }
}                                                           

function terevatap() {
    var rand = Math.round((Math.random() * xoter.length/5) );
    // console.log(xoter.length);
    if (xoter.length > rand) {
        // console.log(xoter.length+" and "+rand);
        for (i = 0; i <= rand; i++) {
            var xot = Math.round(Math.random() * (xoter.length-1));
            //console.log(xoter[xot]);
            var xot_x = xoter[xot].x;
            var xot_y = xoter[xot].y;
            // console.log(xot_x+" "+xot_y);
            matrix[xot_y][xot_x] = 0;
            // console.log(matrix[xot_y][xot_x]);
            xoter.splice(xot, 1);
        }
    }
    // console.log(xoter.length);
    // console.log("this is "rand);
}
function global_taqacum() {
    for (var n in xoter) {
        xoter[n].taqacum();
    }
    for (var n in xotakerner) {
        xotakerner[n].taqacum();
    }
    for (var z in gishatichner) {
        gishatichner[z].taqacum();
    }
    for (var i in hreshner) {
        hreshner[i].taqacum();
    }
}
