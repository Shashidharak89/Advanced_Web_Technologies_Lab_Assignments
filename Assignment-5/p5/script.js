function generate() {
    let n = Number(document.getElementById("n").value);
    let a = 0, b = 1, series = "";

    for (let i = 0; i < n; i++) {
        series += a + " ";
        let temp = a + b;
        a = b;
        b = temp;
    }

    document.getElementById("output").innerHTML = series;
}