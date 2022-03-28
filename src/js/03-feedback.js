
import throttle from 'lodash.throttle';

const refs = {
    form : document.querySelector(".feedback-form"),
    input : document.querySelector("input"),
    textarea : document.querySelector("textarea"),
    btn: document.querySelector("button"),
}

const STORAGE_KEY = "feedback-form-state"
const memoryValueString = localStorage.getItem(STORAGE_KEY);
const memoryValue = JSON.parse(memoryValueString)

let localStorageEl = {
    email : "",
    massage : "",
    ...memoryValue
};

savedInputEmail()
savedTextareaMassage()

function savedInputEmail(){
    const savedEmailString = localStorage.getItem(STORAGE_KEY);
    const savedEmail = JSON.parse(savedEmailString)
        if(savedEmail?.email){
            refs.input.value = savedEmail.email;}
        
}

function savedTextareaMassage(){
    const savedMassageString = localStorage.getItem(STORAGE_KEY);
    const savedMassage = JSON.parse(savedMassageString)
        if(savedMassage?.massage){
            refs.textarea.value = savedMassage.massage;
    }
}


refs.form.addEventListener("input", throttle(allData, 500))

function allData(event){
    if(event.target === refs.input){
        localStorageEl.email = event.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageEl))
    }
    else{
        localStorageEl.massage = event.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageEl));
    }
}

refs.form.addEventListener("submit", onForm)

function onForm(event) {
    event.preventDefault();
    const savedDataline = localStorage.getItem(STORAGE_KEY);
    const savedData = JSON.parse(savedDataline)
    console.log(savedData);
    event.target.reset()
    localStorageEl = {};
    localStorage.removeItem(STORAGE_KEY)
  };
