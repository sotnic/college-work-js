function createTable() {
    var div = document.getElementById("tableOut");
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    var rowNum = document.getElementById("rowNum");
    var colNum = document.getElementById("colNum");
    table.style.border = "solid #8585ad";
    table.setAttribute("border", "solid");

    rowNum.setAttribute("max", 40);
    rowNum.setAttribute("min", 1);
    colNum.setAttribute("max", 40);
    colNum.setAttribute("min", 1);
    rowNum = rowNum.value;
    colNum = colNum.value;

    if (isNaN(rowNum) || rowNum === null || rowNum < 1 || rowNum > 40) {

        table.innerHTML = "";
    }
    else if (isNaN(colNum) || colNum === null || colNum < 1 || colNum > 40) {
        table.innerHTML = "";
    }
    else {
        for (var i = 0; i <= rowNum; i++) {
            var row = document.createElement("tr");
            for (var j = 0; j <= colNum; j++) {
                var col = document.createElement("td");
                col.innerHTML = i + j;
                row.appendChild(col);
            }
            tableBody.appendChild(row);
        }
        table.appendChild(tableBody);
        div.appendChild(table);
    }
}

function reloadTab() {
    document.getElementById("tableOut").innerHTML = "";
    createTable();
    CreateEventListeners();
}

function CreateEventListeners() {
    document.getElementById("resultButton").addEventListener("click", reloadTab, false);
}

window.addEventListener("load", CreateEventListeners, false); 