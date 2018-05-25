// var m = 30//prompt('Your m');
// var n = 30 //prompt('Your n');

var socket = io.connect('http://localhost:3000');

socket.on('matrix', function (matrix, exanak,size,xoter,xotakerner,temprature) {
    console.log(xoter);
    var temp = temprature;
        $('#temp').html(temp+"°C");
    

    if (exanak == "amar") {
        $('#exanak').html('Ամառ');
        $('#exanak').css('color', '#ff3333');
        // $('body').css('background-color', '#ffcccc');
    }
    else if (exanak == "garun") {
        $('#exanak').html('Գարուն');
        $('#exanak').css('color', 'green');
        // $('body').css('background-color', '#ccffcc');
        // $('body').append('<iframe width="1280" height="720" src="https://www.youtube.com/embed/aA2OJLBukLI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen autoplay></iframe>');
     }
    else if (exanak == "dzmer") {
        $('#exanak').html('Ձմեռ');
        $('#exanak').css('color', '#3366ff');
        // $('body').css('background-color', '#ccd9ff');
    }
    else if (exanak == "ashun") {
        $('#exanak').html('Աշուն');
        $('#exanak').css('color', '#ff9933');
        // $('body').css('background-color', '#ffe6cc');
    }
    else {

    }
    if(xotakerner.length ==0){
        var xoter_score = $('#status #xoter_score').text();
        $('#status #xoter_score').text(++xoter_score);
        $('#status').css('color','#009900');
    }
    else if(xoter.length == 4){
        var xotakerner_score = $('#status #xotakerner_score').text();
        $('#status #xotakerner_score').text(++xotakerner_score);
        $('#status').css('color','#009900');
    }
    else{

    }

    startdraw(matrix, exanak);
});

var side = 20;

function setup() {
    noStroke(); 
    createCanvas(900, 900);
}


function startdraw(mat, e) {
    var exanak = e;
    var matrix = mat;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (exanak == "dzmer") {
                    fill('#0000ff');
                    rect(x * side, y * side, side, side);
                }
                else if (exanak == "ashun") {
                    fill('#ffe066');
                    rect(x * side, y * side, side, side);
                }
                else if(exanak == "amar"){
                    console.log(matrix);
                    fill('MediumSeaGreen'); 
                    rect(x * side, y * side, side, side);
                    fill('red');
                    ellipse((x+1) * side-side/2, (y+1) * side-side/2, 10, 10);
                }   
                else {
                    fill('MediumSeaGreen');
                    rect(x * side, y * side, side, side);
                }
                // fill('MediumSeaGreen');
                
            }
            else if (matrix[y][x] == 2 || matrix[y][x] == 2.5) {
                fill('Orange');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3 || matrix[y][x] == 3.5) {
                fill('Gray');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill('Violet');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill('DodgerBlue');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6 || matrix[y][x] == 6.5) {
                fill('SlateBlue');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill('#F2552C');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                fill('#16f200');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 9) {
                fill('#005b06');
                rect(x * side, y * side, side, side);
            }
            else {
                fill('#FFF8DC');
                rect(x * side, y * side, side, side);
            }


        }
    }

}
