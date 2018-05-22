const name = document.getElementById('name');
const email = document.getElementById('email');
const re_email = document.getElementById('re-email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const hear = document.getElementById('hear');
const portfolioLink = document.getElementById('portfolio-link');
const anythingElse = document.getElementById('anything-else');
let value = '';
let flag = true;
name.addEventListener('input' , (e) => {
    value = e.target.value;
    const regex = /[a-zA-Z\s]+/;
    if (regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid name');
        flag = true;
    }
});

email.addEventListener('input', (e) =>{
    value = e.target.value;
    const regex = /^\w{2,}[\.|\_|\$]\w{2,}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid email');
        flag = true;
    }
});

re_email.addEventListener('input', (e) => {
    if(value === e.target.value){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('emails do not match');
        flag = true;
    }
});

phone.addEventListener('input', (e) =>{
    value = e.target.value;
    const regex = /^(0|\+\d{3})\d{9}$/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid phone');
        flag = true;
    }
});

address.addEventListener('input', (e) =>{
    value = e.target.value;
    const regex = /[\w|[a-zA-Z.:]+[\s|\W|\d]+[\w+|\s\d]+/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid address');
        flag = true;
    }
});

city.addEventListener('input', (e) =>{
    value = e.target.value;
    const regex = /[a-zA-Z\s]+/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid city');
        flag = true;
    }
});

state.addEventListener('input', (e) =>{
    value = e.target.value;
    const regex =/[a-zA-Z\s]+/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid state');
        flag = true;
    }
});

country.addEventListener('input', (e) =>{
    value = e.target.value;
    const regex = /[a-zA-Z\s]+/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid country');
        flag = true;
    }
});

zip.addEventListener('input', (e) =>{
    value = e.target.value;
    const regex = /[0-9]+/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid zip');
        flag = true;
    }
});

hear.addEventListener('input', (e) =>{
    value = e.target.value;
    const regex = /[\w|[a-zA-Z.:]+[\s|\W|\d]+[\w+|\s\d]+/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid hear');
        flag = true;
    }
});

portfolioLink.addEventListener('input' , (e) => {
    value = e.target.value;
    const regex= /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid portfolio link');
        flag = true;
    }
});

anythingElse.addEventListener('input', (e)=>{
    value = e.target.value;
    const regex= /[\w|[a-zA-Z.:]+[\s|\W|\d]+[\w+|\s\d]+/;
    if( regex.test(e.target.value)){
        e.target.setCustomValidity('');
        flag = false;
    }else{
        e.target.setCustomValidity('invalid portfolio link');
        flag = true;
    }
});

const onSubmit = () => {
    let modal = document.getElementById('myModal');
    let modal_data = document.getElementById('modal-data');
    let span  = document.getElementsByClassName("close")[0];
    const value_discipline = checkForDiscipline();
    const value_location = checkForLocation();
    const value_radios = checkForRadios();
    let Ptag = document.createElement("p");
    if(value_discipline == false && value_location == false && value_radios == false){
        let textnode = document.createTextNode("please select your primary and other disciplines and desired ");
        Ptag.appendChild(textnode);
        modal_data.appendChild(Ptag);
        modal.style.display = "block";
    }else if(value_discipline == false ){
        let textnode = document.createTextNode("please select your other discipline.");
        Ptag.appendChild(textnode);
        modal_data.appendChild(Ptag);
        modal.style.display = "block";
    }else if(value_location == false){
        let textnode = document.createTextNode("please select your desired location");
        Ptag.appendChild(textnode);
        modal_data.appendChild(Ptag);
        modal.style.display = "block";
    }else if(value_radios == false){
        let textnode = document.createTextNode("please select your primary discipline");
        Ptag.appendChild(textnode);
        modal_data.appendChild(Ptag);
        modal.style.display = "block";
    }else if(flag == true){
        let textnode = document.createTextNode("Some details in Personal information are missing!");
        Ptag.appendChild(textnode);
        modal_data.appendChild(Ptag);
        modal.style.display = "block";
    }else{
        let textnode = document.createTextNode("Form submitted Successfully");
        Ptag.appendChild(textnode);
        modal_data.appendChild(Ptag);
        modal.style.display = "block";
    }
    
}

const checkForDiscipline = () =>{
    const checkboxDiscipline = document.getElementsByClassName('checkbox-btn-discipline'); 
    const checkboxes = Array.from(checkboxDiscipline);
    if(checkboxes[0].checked == false && checkboxes[1].checked == false && checkboxes[2].checked == false){
		return false;
    }
    return true;
}

const checkForLocation = () => {
    const checkboxLocation = document.getElementsByClassName('checkbox-btn-location'); 
    const checkboxes = Array.from(checkboxLocation);
    if(checkboxes[0].checked == false && checkboxes[1].checked == false && checkboxes[2].checked == false && checkboxes[3].checked == false && checkboxes[4].checked == false && checkboxes[5].checked == false && checkboxes[6].checked == false && checkboxes[7].checked == false){
		return false;
    }
    return true;
}

const checkForRadios = () => {
    const checkForRadios = document.getElementsByClassName('Radio-btn');
    const radiobtn = Array.from(checkForRadios);
    if(radiobtn[0].checked == false && radiobtn[1].checked == false && radiobtn[2].checked == false && radiobtn[3].checked == false ){
        return false;
    }
    return true;
}

let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}