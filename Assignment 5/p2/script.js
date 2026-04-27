document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let pass = document.getElementById("pass").value;

    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    let passPattern = /^[A-Za-z0-9@#$%^&+=]{6,}$/;

    document.getElementById("nErr").innerHTML =
        namePattern.test(name) ? "" : " Invalid Name";

    document.getElementById("eErr").innerHTML =
        emailPattern.test(email) ? "" : " Invalid Email";

    document.getElementById("pErr").innerHTML =
        phonePattern.test(phone) ? "" : " Invalid Phone";

    document.getElementById("passErr").innerHTML =
        passPattern.test(pass) ? "" : " Weak Password";
});