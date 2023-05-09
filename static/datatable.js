$(document).ready(function () {
    $('#data').DataTable();
});

function get_table() {
    table = document.getElementById("data");
    json_table = tableToJson(table)
    console.log(json_table)
    console.log(typeof json_table)
    
    // $.get("/test", function(data) {
    //     console.log(data)
    //     // console.log($.parseJSON(data))
    // });
    
    $.post( "/test", { data: JSON.stringify(json_table)} );
}


function tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }

    // go through cells
    for (var i=1; i<table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j=0; j<tableRow.cells.length; j++) {

            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

        }

        data.push(rowData);
    }       

    return data;
}

function edit_row(index){

    edit_button = document.getElementById("edit-button-" + index);
    edit_button.style.visibility = "hidden"

    save_button = document.getElementById("save-button-" + index);
    save_button.style.visibility = "visible"

    rowelements = document.getElementsByClassName("table-content-" + index);
    for (const rowelement of rowelements){
        rowelement.setAttribute("contenteditable", "true");
    }
    

}

function save_row(index, columns){

    edit_button = document.getElementById("edit-button-" + index);
    edit_button.style.visibility = "visible"

    save_button = document.getElementById("save-button-" + index);
    save_button.style.visibility = "hidden"

    rowelements = document.getElementsByClassName("table-content-" + index);

    row = {"id": index - 1}
    for (let i = 0; i < rowelements.length; i++) {
        row[columns[i]] = rowelements[i].innerHTML;
    }

    for (const rowelement of rowelements){
        rowelement.setAttribute("contenteditable", "false");
    }

    rows = [row]
    $.post( "/set", { data: JSON.stringify(rows)} );

}