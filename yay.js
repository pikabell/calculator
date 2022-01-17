function npt() {
    console.log(this.id);
    let x = gethistory();
    if (x == '0') {

        printhistory(this.id);
    } else if (x) {
        printhistory(x + this.id);
    }

}

function opt() {
    console.log(this.id);
    let x = gethistory();
    if (x == '0') {

        printhistory(this.id);
    } else if (x) {
        printhistory(x + this.id);
    }

}

function equal() {
    try {

        printoutput(eval(gethistory()));
    } catch (error) {
        alert("sahi sahi daal wrna khana ni milega");
    }
}

//     // return (a+b);
// function percent(a, b) {

// }

function tool() {
    console.log(this.id);
    if (this.id == "clearall") {
        printhistory("0");
        printoutput("0");
    }
    if (this.id == "clear") {
        let x = gethistory();
        console.log(typeof(x));
        if (x.length == 1) {
            printhistory('0');
        } else if (x) {
            x = x.substr(0, x.length - 1);
            printhistory(x);
        } else {
            printhistory("0");
        }
    }

}



function gethistory() {
    return document.getElementById("history").innerText;
}

function getoutput() {
    return document.getElementById("output").innerText;
}



function printoutput(txt) {
    document.getElementById("output").innerText = txt;

}

function printhistory(txt) {
    document.getElementById("history").innerText = txt;
}

let operator = document.getElementsByClassName("operator");
let number = document.getElementsByClassName("number");
let tools = document.getElementsByClassName("tools");

for (let i = 0; i < operator.length; i++) {
    if (i == 6) {
        operator[i].addEventListener("click", equal);
    } else {
        operator[i].addEventListener("click", opt);

    }
}
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", npt);
}
for (let i = 0; i < tools.length; i++) {
    tools[i].addEventListener("click", tool);
}