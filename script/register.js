let userData = JSON.parse(localStorage.getItem("user-data")) || [];

/**  Values**/
let id = document.getElementById("id");
let name = document.getElementById("name");
let age = document.getElementById("age");
let designation = document.getElementById("designation");
let priority = document.getElementById("priority");
let vaccine = document.getElementById("vaccine");
id.value = idGenerator();
document.getElementById("registration").addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {
        id: id.value,
        name: name.value,
        age: age.value,
        designation: designation.value,
        priority: priority.value,
        vaccine: vaccine.value,
        otp: otp = otpGenerator(),
    }
    validate(obj);

});
function idGenerator() {
    let str = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let id = "";
    let unique = false;
    for (let i = 0; i < str.length; i++) {
        const randomStr = Math.floor(Math.random() * str.length);
        const item = str[randomStr];
        const randomNo = Math.floor(Math.random() * numbers.length);
        const num = numbers[randomNo];
        const capital = Math.floor(Math.random() * str.length);
        const cap = str[capital];
        id += item + num + cap.toUpperCase();
        if (id.length == 12) {
            break;
        }
    }
    userData.forEach((element) => {
        if (element.id == id) {
            unique = true;
        }
    })
    if (unique == false) {
        return id;
    } else {
        idGenerator();
    }
}

function otpGenerator() {
    let numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]
    let str = "";
    for (let i = 0; i < numbers.length; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const item = numbers[randomIndex];
        str += item;
        if (str.length == 4) {
            break;
        }
    }
    if (str.length !== 4) {
        otpGenerator();
    } else {
        return str
    }

}
function validate(obj){
    if (obj.id.length == 12) {
        if (obj.name.length >= 4) {
            if (obj.age >= 18 && obj.age <= 40) {
                if (obj.designation !== "" && obj.priority !== "" && obj.vaccine !== "" && obj.otp !== null) {
                    userData.push(obj)
                    localStorage.setItem("user-data", JSON.stringify(userData))
                    alert("successfully registerd 🎉");
                    window.location.replace("./dasboard.html");
                }
            } else {
                alert("age should be between 18 and 40 ")
            }
        } else {
            alert("Name must contain at least 4 charecters!...")
        }
    }
}