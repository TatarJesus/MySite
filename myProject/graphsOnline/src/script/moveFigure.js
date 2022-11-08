function myMove(e) {
    if (dragok) {
        var mx = parseInt(e.clientX - offsetX - 242);
        var my = parseInt(e.clientY - offsetY - 50);

        var dx = mx - startX;
        var dy = my - startY;

        for (var i = 0; i < arrVertexs.length; i++) {
            if (arrVertexs[i].isDragging == true) {
                arrVertexs[i].x += dx;
                arrVertexs[i].y += dy;
            }
        }
        draw();
        startX = mx;
        startY = my;
    }
}

function myUp(e) {
    dragok = false;
    for (var i = 0; i < arrVertexs.length; i++) {
        arrVertexs[i].isDragging = false;
    }
}

function myDown(e) {
    var mx = parseInt(e.clientX - offsetX - 242);
    var my = parseInt(e.clientY - offsetY - 50);
    dragok = true;
    activeVertex = 0;
    var group = [];
    for (var i = 0; i < arrVertexs.length; i++) {

        // if (mx > arrVertexs[i].x && (mx < arrVertexs[i].x + arrVertexs[i].width) && my > arrVertexs[i].y && (my < arrVertexs[i].y + arrVertexs[i].height)) {
        //     group.push(arrVertexs[i]);
        // }
        if ((my >= arrVertexs[i].y - arrVertexs[i].radius && my <= arrVertexs[i].y + arrVertexs[i].radius) && (mx >= arrVertexs[i].x - arrVertexs[i].radius && mx <= arrVertexs[i].x + arrVertexs[i].radius)) {
            group.push(arrVertexs[i]);
            activeVertex = i + 1;
            edge_check = 1;
        }
        draw();
    }
    if (group.length === 1) {
        group[0].isDragging = true;
    }
    else if (group.length >= 2) {
        var maxZ = group[0].z;
        var b = group[0];

        for (var i = 1; i < group.length; i++) {
            if (maxZ < group[i].z) {
                maxZ = group[i].z;
                b = group[i];
            }
        }
        b.isDragging = true;
    }

    startX = mx;
    startY = my;
    // console.log('mx: ', mx, 'my: ', my)
    edge_check = 0;
}