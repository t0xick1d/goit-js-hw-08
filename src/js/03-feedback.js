const throttle = require('lodash.throttle');


const formUrl = document.querySelector('.feedback-form');

const KEY_FORM_DATA = 'feedback-form-state';

formUrl.addEventListener('input', throttle(onChangeInput, 500));
formUrl.addEventListener('submit', onSubmitForm);

initForm();

function initForm() {
  let persistedForm = localStorage.getItem(KEY_FORM_DATA);
  if (persistedForm) {
    persistedForm = JSON.parse(persistedForm);
    Object.entries(persistedForm).forEach(([name, value]) => {
      formUrl.elements[name].value = value;
    });
  }
}

function onChangeInput(e) {
  let persistedForm = localStorage.getItem(KEY_FORM_DATA);
  persistedForm = persistedForm ? JSON.parse(persistedForm) : {};
  persistedForm[e.target.name] = e.target.value;
  localStorage.setItem(KEY_FORM_DATA, JSON.stringify(persistedForm));
}

function onSubmitForm(e) {
  e.preventDefault();

  console.log('email :', formUrl.elements.email.value);
  console.log('message:', formUrl.elements.message.value);

  localStorage.removeItem(KEY_FORM_DATA);
  formUrl.elements.email.value = '';
  formUrl.elements.message.value = '';

  // const formDataUrl = new FormData(formUrl);
  // formDataUrl.forEach((value, name) => {
  //   console.log('form data url', name, value);

  //   value = '';
  // });
}
