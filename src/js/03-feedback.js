const throttle = require('lodash.throttle');

const emailUrl = document.querySelector('input');
const messageUrl = document.querySelector('textarea');
const formUrl = document.querySelector('.feedback-form');

const DATA_FORM_KEY = 'feedback-form-state';
let formData = {};

emailUrl.addEventListener('input', throttle(onChangeInput, 500));
messageUrl.addEventListener('input', throttle(onChangeInput, 500));
formUrl.addEventListener('submit', onSubmitForm);

setCurrentValueForm();

function onChangeInput(e) {
  if (localStorage.key(DATA_FORM_KEY) === DATA_FORM_KEY) {
    formData = JSON.parse(localStorage.getItem(DATA_FORM_KEY));
  }
  console.log('return', localStorage.key(DATA_FORM_KEY) === DATA_FORM_KEY);
  console.log('after if');
  const inputValue = e.target.value;
  const inputName = e.target.name;
  formData[inputName] = inputValue;
  localStorage.setItem(DATA_FORM_KEY, JSON.stringify(formData));
}

function setCurrentValueForm() {
  const setActualValue = JSON.parse(localStorage.getItem(DATA_FORM_KEY));

  setActualValue &&
    setActualValue.email &&
    (emailUrl.value = setActualValue.email);

  setActualValue &&
    setActualValue.message &&
    (messageUrl.value = setActualValue.message);
}

function onSubmitForm(e) {
  const email = JSON.parse(localStorage.getItem(DATA_FORM_KEY)).email;
  const message = JSON.parse(localStorage.getItem(DATA_FORM_KEY)).message;
  console.log('email :', email);
  console.log('message:', message);
  e.preventDefault();
  localStorage.clear();
  emailUrl.value = '';
  messageUrl.value = '';
}
