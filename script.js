let submit = document.getElementById("submit");
let fname = document.getElementById("first-name");
let lname = document.getElementById("last-name");
let email = document.getElementById("email");
let address1 = document.getElementById("address1");
let address2 = document.getElementById("address2");
let pincode = document.getElementById("pin");
let gender = document.getElementsByName("gender");
let food = document.getElementsByName("food");
let state = document.getElementById("state");
let country = document.getElementById("country");

submit.addEventListener("click",(e)=> {
    e.preventDefault();
    console.log(fname.value);
    let address = [];
    address.push(address1.value);
    address.push(address2.value);
    let genderValue;
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked) genderValue = gender[i].value;
    }
    let foodList = [];
    let foodCount = 0;
    let foods;
    for(let i=0;i<food.length;i++) {
        if(food[i].checked) foodList.push(food[i].value);
        foodCount++;
    }
    if(foodCount >=2) foods= foodList.join(", ");
    else foods = alert("Choose atleast 2 options out of 5 in foods");

    createTable(fname.value,lname.value,email.value,address.join(" "),pin.value,genderValue,foods,state.value,country.value);
    fname.value = "";
    lname.value = "";
    email.value = "";
    address1.value = "";
    address2.value = "";
    pin.value = "";
    gender.value = "";
    foodList = [];
    state.value = "";
    country.value = "";
    document.getElementById("comments").value = "";
});

const createTable = (fname, lname, email, address, pin, gender, food, state, country) => {
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");
    let tdFirstName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdAddress = document.createElement("td");
    let tdPin = document.createElement("td");
    let tdGender = document.createElement("td");
    let tdFood = document.createElement("td");
    let tdState = document.createElement("td");
    let tdCountry = document.createElement("td");
    tdFirstName.innerHTML = fname;
    tdLastName.innerHTML = lname;
    tdEmail.innerHTML = email;
    tdAddress.innerHTML = address;
    tdPin.innerHTML = pin;
    tdGender.innerHTML = gender;
    tdFood.innerHTML = food;
    tdState.innerHTML = state;
    tdCountry.innerHTML = country;

    tr.append(tdFirstName);
    tr.append(tdLastName);
    tr.append(tdEmail);
    tr.append(tdAddress);
    tr.append(tdPin);
    tr.append(tdGender);
    tr.append(tdFood);
    tr.append(tdState);
    tr.append(tdCountry);

    tbody.append(tr);

}