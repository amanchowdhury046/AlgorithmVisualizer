var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos = document.querySelectorAll(".mytest");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:column";

//Array generation and updation.

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 80) + 4;
        divs[i] = document.createElement("div");
        divs[i].innerHTML = div_sizes[i];
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% 0% " + margin_size + "%; background-color:blue; text-align: center;font-weight: bold; color: white; height:" + (100 / array_size - (2 * margin_size)) + "%; width:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
    }
}

function runalgo() {
    disable_buttons();
    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble Sort": Bubble();
            break;
        case "Selection Sort": Selection_sort();
            break;
        case "Insertion Sort": Insertion();
            break;
        case "Merge Sort": Merge();
            break;
        case "Quick Sort": Quick();
            break;
        case "Heap Sort": Heap();
            break;
    }
}

function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
    }, c_delay += delay_time);
}
