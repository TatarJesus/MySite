// Circle drawing method
function drawCircle(figure) {
    ctx.beginPath();
    ctx.arc(figure.x, figure.y, figure.radius, figure.sAngle, figure.eAngle);
    ctx.fillStyle = figure.fill;
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.font = "25px CrimsonText-SemiBold";
    if (figure.vertex < 10) ctx.fillText(figure.vertex, figure.x - 5, figure.y + 7);
    else if (figure.vertex >= 10 && figure.vertex < 100) ctx.fillText(figure.vertex, figure.x - 11, figure.y + 7);
    else ctx.fillText(figure.vertex, figure.x - 17, figure.y + 7);
    if (figure.vertex == activeVertex) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#3500D3";
    } else {
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
    }
    ctx.stroke();
}

// Edge drawing method
function drawEdge(vertex1, vertex2) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.moveTo(vertex1.x, vertex1.y);
    ctx.lineTo(vertex2.x, vertex2.y);
    ctx.stroke();
}

// Edge Directed drawing method
function drawEdgeDirected(vertex1, vertex2) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    // ctx.moveTo(75,50);
    // ctx.lineTo(100,75);
    // ctx.lineTo(100,25);
    ctx.moveTo(vertex1.x, vertex1.y);
    ctx.lineTo(vertex2.x, vertex2.y);
    ctx.moveTo(vertex2.x, vertex2.y - vertex2.radius);
    ctx.lineTo(vertex2.x - 5, vertex2.y - vertex2.radius - 15);
    ctx.lineTo(vertex2.x + 5, vertex2.y - vertex2.radius - 15);
    ctx.fill();
    ctx.stroke();
}

// Calling rendering methods
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < arrEdges.length; i++) {
        drawEdge(arrVertexs[arrEdges[i].vertexFrom - 1], arrVertexs[arrEdges[i].vertexTo - 1]);
    }
    for (var i = 0; i < arrEdgesDirected.length; i++) {
        drawEdgeDirected(arrVertexs[arrEdgesDirected[i].vertexFrom - 1], arrVertexs[arrEdgesDirected[i].vertexTo - 1]);
    }
    for (var i = 0; i < arrVertexs.length; i++) {
        drawCircle(arrVertexs[i]);
    }
    amountVertexElem.innerHTML = '&nbsp;' + arrVertexs.length;
    amountEdgeElem.innerHTML = '&nbsp;' + (arrEdges.length / 2 + arrEdgesDirected.length);
}