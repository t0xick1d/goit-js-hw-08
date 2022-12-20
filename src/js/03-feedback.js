const throttle = require('lodash.throttle');

const emailUrl = document.querySelector('input');
const messageUrl = document.querySelector('textarea');
const formUrl = document.querySelector('.feedback-form');

const DATA_FORM_KEY = 'feedback-form-state';

emailUrl.addEventListener('input', throttle(onChangeInput, 500));
messageUrl.addEventListener('input', throttle(onChangeInput, 500));
formUrl.addEventListener('submit', onSubmitForm);

const formData = {};

function onChangeInput(e) {
  const inputValue = e.target.value;
  const inputName = e.target.name;
  formData[inputName] = inputValue;
  localStorage.setItem(DATA_FORM_KEY, JSON.stringify(formData));
}
setCurrentValueForm();

function setCurrentValueForm() {
  const setActualValue = JSON.parse(localStorage.getItem(DATA_FORM_KEY));

  console.log(setActualValue);

  setActualValue.email ? (emailUrl.value = setActualValue.email) : '';

  setActualValue.message ? (messageUrl.value = setActualValue.message) : '';
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
