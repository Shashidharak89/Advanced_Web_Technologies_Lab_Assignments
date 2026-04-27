function generate() {
    let marks = document.querySelectorAll(".marks");
    let arr = [];

    for (let i = 0; i < marks.length; i++) {
        arr.push(Number(marks[i].value));
    }

    let total = arr.reduce((a, b) => a + b, 0);
    let avg = total / arr.length;

    let grade = (avg >= 90) ? "A" :
                (avg >= 75) ? "B" :
                (avg >= 50) ? "C" : "D";

    let result = arr.every(m => m >= 35) ? "Pass" : "Fail";

    document.getElementById("output").innerHTML =
        `Total: ${total} <br>
         Average: ${avg} <br>
         Grade: ${grade} <br>
         Result: ${result}`;
}