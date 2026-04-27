let arr = [];

function add() {
    let n = Number(document.getElementById("num").value);
    arr.push(n);

    let evenSum = 0, oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            evenSum += arr[i];
        else
            oddSum += arr[i];
    }

    document.getElementById("even").value = evenSum;
    document.getElementById("odd").value = oddSum;

    document.getElementById("num").value = "";
}