//Andrew
/*andrew*/

//CREATE

function create() {

    var btn = document.createElement("button");
    btn.innerHTML = "New Button";
    document.body.appendChild(btn);

}

//READ

var copy = document.getElementById("read"); //button
var paste =document.getElementById('show'); //paragraph

function read() {

    paste.innerHTML = copy.textContent;

}

//UPDATE

function update() {



}


//DELET

function remove() {



}
