function pushVertex(vertexNum, zIndex){
    arrVertexs.push({
        vertex: vertexNum,
        x: 100,
        y: 100,
        z: zIndex,
        radius: 22,
        sAngle: 0,
        eAngle: 2 * Math.PI,
        fill: '#FFF',
        isDragging: false
    });
}

function addVertex() {
    if (arrVertexs.length != 0) {
        if (arrVertexs[arrVertexs.length - 1].vertex == arrVertexs.length){
            pushVertex(arrVertexs.length + 1, arrVertexs.length + 1);
        }
        else {
            let n = 1;
            while (arrVertexs.find(item => item == n)) {
                n++;
            }
            pushVertex(n, n + 1);
        }
    } 
    else {
        pushVertex(1, 1);
    }
    draw();
    canvas.onmousedown = myDown;
    canvas.onmouseup = myUp;
    canvas.onmousemove = myMove;
}