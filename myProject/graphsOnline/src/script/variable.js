// Array for edges and vertexs
let arrVertexs = [];
let arrEdges = [];
let arrEdgesDirected = [];

// Element to quanitity
amountVertexElem = document.getElementById("amountVertex");
amountEdgeElem = document.getElementById("amountEdge");
amountVertexElem.innerHTML = '&nbsp;' + arrVertexs.length;
amountEdgeElem.innerHTML = '&nbsp;' + (arrEdges.length / 2 + arrEdgesDirected.length);

// Create place to draw
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");


var num = 0;
var dragok = false;
var startX;
var startY;
var offsetX = 10;
var offsetY = 10;
let edge_check = 0;
let coordinatesEdge = []
let startEdgeY;
let startEdgeX;
let activeVertex = 0;