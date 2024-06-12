'use strict';
var canvas = document.body.appendChild(document.createElement("canvas"));
var context = canvas.getContext("2d");
context.globalCompositeOperation = "lighter";
canvas.width = 2580;
canvas.height = 1440;
draw();
var textStrip = ["L", "A", "R", "P", "I", "S", "T", "2", "0", "2", "3"];
var stripCount = 60;
var stripX = new Array;
var stripY = new Array;
var dY = new Array;
var stripFontSize = new Array;
var i = 0;
for (; i < stripCount; i++) {
 stripX[i] = Math.floor(Math.random() * 3580);
 stripY[i] = -100;
 dY[i] = Math.floor(Math.random() * 7) + 3;
 stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
}
var theColors = ["#8682c5", "#ccd9ff", "#ccccff", "#d6d6f5", "#30395E", "#8682c5", "#d6d6f5"];
var elem;
var timer;
function drawStrip(x, y) {
 var k = 0;
 for (; k <= 20; k++) {
   var randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
   if (context.fillText) {
     switch(k) {
       case 0:
         context.fillStyle = theColors[0];
         break;
       case 1:
         context.fillStyle = theColors[1];
         break;
       case 3:
         context.fillStyle = theColors[2];
         break;
       case 7:
         context.fillStyle = theColors[3];
         break;
       case 13:
         context.fillStyle = theColors[4];
         break;
       case 17:
         context.fillStyle = theColors[5];
         break;
     }
     context.fillText(randChar, x, y);
   }
   y = y - stripFontSize[k];
 }
}
function draw() {
 context.clearRect(0, 0, canvas.width, canvas.height);
 context.shadowOffsetX = context.shadowOffsetY = 0;
 context.shadowBlur = 8;
 context.shadowColor = "#ccccff";
 var j = 0;
 for (; j < stripCount; j++) {
   context.font = stripFontSize[j] + "px MatrixCode";
   context.textBaseline = "top";
   context.textAlign = "center";
   if (stripY[j] > 1440) {
     stripX[j] = Math.floor(Math.random() * canvas.width);
     stripY[j] = -90;
     dY[j] = Math.floor(Math.random() * 7) + 3;
     stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
     drawStrip(stripX[j], stripY[j]);
   } else {
     drawStrip(stripX[j], stripY[j]);
   }
   stripY[j] += dY[j];
 }
 setTimeout(draw, 70);
}
;