
var i = {};
function addForm(){
var v = document.getElementById("barcode1").value;
i[v] = [];
i[v].push(v);
//document.getElementById("addForms").removeAttribute("hidden");
}
console.log(i);
