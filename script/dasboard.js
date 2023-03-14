let userData = JSON.parse(localStorage.getItem("user-data")) || [];
let vaccinatedUsers = JSON.parse(localStorage.getItem("vaccinated")) || [];
let tbody = document.getElementById("dash_Board")
let doFilter=document.getElementById("by_vaccine");
let doPriority=document.getElementById("by_priority");
let doAge=document.getElementById("by_age");

doFilter.addEventListener("change",byVaccine);
doPriority.addEventListener("change",byPriority);
doAge.addEventListener("change",byAge);


function showData() {
    tbody.innerHTML = null;
    userData.forEach(function (user, index) {
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        let Name = document.createElement("td");
        let age = document.createElement("td");
        let designation = document.createElement("td");
        let priority = document.createElement("td");
        let vType = document.createElement("td");
        let otp = document.createElement("td");
        let vaccine = document.createElement("td");
        let Delete = document.createElement("td");
        id.textContent = user.id;
        Name.textContent = user.name;
        age.textContent = user.age;
        designation.textContent = user.designation;
        priority.textContent = user.priority;
        vType.textContent = user.vaccine;
        otp.textContent = user.otp;
        vaccine.textContent = "Vaccinate";
        vaccine.className = "green"
        vaccine.addEventListener("click", () => {
            let a = prompt("enter OTP");

            let promise = new Promise(function (resolve, reject) {
                if (a === otp.textContent) {
                    resolve("successfull")
                }else{
                    reject("wrong otp")
                }
            })
            promise
                .then((res)=>{
                    alert(res)
                    setTimeout(()=>{
                        alert(`${user.name}  Added to Queue`);
                    },0)
                   
                    setTimeout(()=>{
                        alert(`Vaccinating ${user.vaccine} 💉....`);
                        
                    },5000)

                    setTimeout(() => {
                        alert(`${user.name} Vaccinated`);
                        vaccinatedUsers.push(user);
                        localStorage.setItem("vaccinated", JSON.stringify(vaccinatedUsers));
                        userData.splice(index, 1);
                        localStorage.setItem("user-data", JSON.stringify(userData));
                        showData();
                        window.location.replace("./vaccination.html")
                       
                    }, 10000)

                })
                .catch((error)=>{
                    alert(error);
                })

        })
        Delete.textContent = "Delete";
        Delete.className = "red"
        Delete.addEventListener("click", () => {
            userData.splice(index, 1);
            localStorage.setItem("user-data", JSON.stringify(userData));
            showData();
        })
        tr.append(id, Name, age, designation, priority, vType, otp, vaccine, Delete)
        tbody.append(tr)

    });
}



function byVaccine(){
    userData = JSON.parse(localStorage.getItem("user-data"))
      if (doFilter.value =="Covishield") {
        userData = userData.filter((user) => user.vaccine =="Covishield")
        console.log(userData);
        showData()
      } else if (doFilter.value =="Covaxin") {
        userData = userData.filter((user) => user.vaccine =="Covaxin")
        console.log(userData);
        showData()
      } else if (doFilter.value =="Sputnik") {
        userData = userData.filter((user) => user.vaccine =="Sputnik")
        console.log(userData);
        showData()
      } else {
        userData = JSON.parse(localStorage.getItem("user-data"))
        console.log(userData);
        showData()
      }
}
function byPriority(){
    userData = JSON.parse(localStorage.getItem("user-data"))
      if (doPriority.value =="p0") {
        userData = userData.filter((user) => user.priority =="p0")
        console.log(userData);
        showData()
      } else if (doPriority.value =="p1") {
        userData = userData.filter((user) => user.priority =="p1")
        console.log(userData);
        showData()
      } else if (doPriority.value =="p2") {
        userData = userData.filter((user) => user.priority =="p2")
        console.log(userData);
        showData()
      }  else if (doPriority.value =="p3") {
        userData = userData.filter((user) => user.priority =="p3")
        console.log(userData);
        showData()
      }else {
        userData = JSON.parse(localStorage.getItem("user-data"))
        console.log(userData);
        showData()
      }
}
function byAge(){
    userData = JSON.parse(localStorage.getItem("user-data"))
    if(doAge.value=="Ascending"){
        userData=userData.sort((a,b)=>{return a.age-b.age})
        showData()
    }else if(doAge.value=="Descending"){
        userData=userData.sort((a,b)=>{return b.age-a.age})
        showData()
    }else{
        userData = JSON.parse(localStorage.getItem("user-data"))
        showData()
    }
}
showData();
