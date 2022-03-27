
import throttle from 'lodash.throttle';

const refs = {
    form : document.querySelector(".feedback-form"),
    input : document.querySelector("input"),
    textarea : document.querySelector("textarea"),
    btn: document.querySelector("button"),
}

const STORAGE_KEY = "feedback-form-state"

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

const localStorageEl ={
    massage : '',
    email : "",
}


refs.input.addEventListener('input', throttle(oninput, 500));

refs.textarea.addEventListener('keydown', throttle(onTextarea, 500));

function onTextarea(event){
    localStorageEl.massage = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageEl));
}

function oninput(event){
    localStorageEl.email = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageEl));
}


refs.form.addEventListener("submit", onForm)

function onForm(event) {
    event.preventDefault();
    const savedDataline = localStorage.getItem(STORAGE_KEY);
    const savedData = JSON.parse(savedDataline)
    console.log('email :', savedData.email);
    console.log('massage :', savedData.massage);
    event.target.reset()
    localStorageEl.email = '';
    localStorageEl.massage = '';
    localStorage.removeItem(STORAGE_KEY)
  };
