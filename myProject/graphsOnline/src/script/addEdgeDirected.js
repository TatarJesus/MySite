function startEdgeDirected() {
    console.log('Ya tut');
    canvas.onmousedown = myDownEdgeDirected;
}

function myDownEdgeDirected(e) {
    var mx = parseInt(e.clientX - offsetX - 242);
    var my = parseInt(e.clientY - offsetY - 50);
    coordinatesEdge.push(mx);
    coordinatesEdge.push(my);
    if (coordinatesEdge.length == 4) {
        addEdgeDirected();
    }
}

function checkForExistEdgeDirected(elem1, elem2){
    for(let i = 0; i < arrEdgesDirected.length; i++){
        if ((arrEdgesDirected[i].vertexFrom == elem1 && arrEdgesDirected[i].vertexTo == elem2)) return 1;
    }
    for(let i = 0; i < arrEdges.length; i++){
        if ((arrEdges[i].vertexFrom == elem1 && arrEdges[i].vertexTo == elem2) || (arrEdges[i].vertexFrom == elem2 && arrEdges[i].vertexTo == elem1)) return 1;
    }
    return 0;
}

function addEdgeDirected() {
    let arr = [0, 0];
    for (i = 0; i < arrVertexs.length; i++) {
        if ((arrVertexs[i].x - arrVertexs[i].radius < coordinatesEdge[0]) && (arrVertexs[i].x + arrVertexs[i].radius > coordinatesEdge[0]) &&
            (arrVertexs[i].y - arrVertexs[i].radius < coordinatesEdge[1]) && (arrVertexs[i].y + arrVertexs[i].radius > coordinatesEdge[1])) {
            arr[0] = i + 1;
        }
        else if ((arrVertexs[i].x - arrVertexs[i].radius < coordinatesEdge[2]) && (arrVertexs[i].x + arrVertexs[i].radius > coordinatesEdge[2]) &&
            (arrVertexs[i].y - arrVertexs[i].radius < coordinatesEdge[3]) && (arrVertexs[i].y + arrVertexs[i].radius > coordinatesEdge[3])) {
            arr[1] = i + 1;
        }
    }
    if (arr[0] != 0 && arr[1] != 0 && checkForExistEdgeDirected(arr[0], arr[1]) == 0) {
        arrEdgesDirected.push({
            vertexFrom: arr[0],
            vertexTo: arr[1],
        });
    }
    canvas.onmousedown = myDown;
    coordinatesEdge = [];
    draw();
}