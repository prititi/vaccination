let vaccinatedUsers=JSON.parse(localStorage.getItem("vaccinated"))||[];
let tbody=document.getElementById("vaccinated");
let doFilter=document.getElementById("by_vaccine");
let doPriority=document.getElementById("by_priority")
let doAge=document.getElementById("by_age");

doFilter.addEventListener("change",byVaccine);
doPriority.addEventListener("change",byPriority);
doAge.addEventListener("change",byAge);

function showData(){
    tbody.innerHTML=null;
    vaccinatedUsers.forEach(function (user,index){
        let tr=document.createElement("tr");
        let id=document.createElement("td");
        let Name=document.createElement("td");
        let age=document.createElement("td");
        let designation=document.createElement("td");
        let priority=document.createElement("td");
        let vType=document.createElement("td");
        let Delete = document.createElement("td");
        id.textContent=user.id;
        Name.textContent=user.name;
        age.textContent=user.age;
        designation.textContent=user.designation;
        priority.textContent=user.priority;
        vType.textContent=user.vaccine;

        Delete.textContent = "Delete";
        Delete.className = "red"
        Delete.addEventListener("click", () => {
          vaccinatedUsers.splice(index, 1);
            localStorage.setItem("user-data", JSON.stringify(vaccinatedUsers));
            showData();
        })
        tr.append(id, Name, age, designation, priority, vType, Delete)
        tbody.append(tr)

    });

    
}


function byVaccine(){
  vaccinatedUsers = JSON.parse(localStorage.getItem("vaccinated"))
    if (doFilter.value == "Covishield") {
      vaccinatedUsers = vaccinatedUsers.filter((user) => user.vaccine == "Covishield")
      showData()
    } else if (doFilter.value == "Covaxin") {
      vaccinatedUsers = vaccinatedUsers.filter((user) => user.vaccine == "Covaxin")
      showData()
    } else if (doFilter.value == "Sputnik") {
      vaccinatedUsers = vaccinatedUsers.filter((user) => user.vaccine == "Sputnik")
      showData()
    } else {
      vaccinatedUsers = JSON.parse(localStorage.getItem("vaccinated"))
      showData()
    }
}
function byPriority(){
  vaccinatedUsers = JSON.parse(localStorage.getItem("vaccinated"))
    if (doPriority.value =="p0") {
      vaccinatedUsers = vaccinatedUsers.filter((user) => user.priority =="p0")
      showData()
    } else if (doPriority.value =="p1") {
      vaccinatedUsers = vaccinatedUsers.filter((user) => user.priority =="p1")
      showData()
    } else if (doPriority.value =="p2") {
      vaccinatedUsers = vaccinatedUsers.filter((user) => user.priority =="p2")
      showData()
    }  else if (doPriority.value =="p3") {
      vaccinatedUsers = vaccinatedUsers.filter((user) => user.priority =="p3")
      showData()
    }else {
      vaccinatedUsers = JSON.parse(localStorage.getItem("vaccinated"))
      showData()
    }
}
function byAge() {
  vaccinatedUsers = JSON.parse(localStorage.getItem("vaccinated"))
  if(doAge.value=="Ascending"){
      vaccinatedUsers=vaccinatedUsers.sort((a,b)=>{return a.age-b.age;})
      showData()
  }else if(doAge.value=="Descending"){
      vaccinatedUsers=vaccinatedUsers.sort((a,b)=>{return b.age-a.age})
      showData()
  }else{
      vaccinatedUsers = JSON.parse(localStorage.getItem("vaccinated"))
      showData()
  }
}
showData()