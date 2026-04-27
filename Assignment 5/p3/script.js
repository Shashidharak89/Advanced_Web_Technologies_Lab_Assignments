function getValues() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    return [a, b];
}

function add() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML = "Result: " + (a + b);
}

function sub() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML = "Result: " + (a - b);
}

function mul() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML = "Result: " + (a * b);
}

function div() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML = "Result: " + (a / b);
}

function mod() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML = "Result: " + (a % b);
}