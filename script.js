function sortTable(){
    var tbl = document.getElementById("caltbl").tBodies[0];
    var store = [];
    for(var i=tbl.rows.length-1, len=0; i>=len; i--){
        var row = tbl.rows[i];
        var sortnr = parseFloat(row.cells[2].textContent || row.cells[2].innerText);
        if(!isNaN(sortnr)) store.push([sortnr, row]);
    }
    store.sort(function(x,y){
        return x[0] - y[0];
    });
    for(var i=store.length-1, len=0; i>=len; i--){
        tbl.appendChild(store[i][1]);
    }
    store = null;
}