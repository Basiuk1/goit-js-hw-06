const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const mail = form.elements.email.value;
  const password = form.elements.password.value;

  if (!mail || !password) {
    alert("Будь ласка, заповніть всі поля форми.");
    return;
  }

  //   console.log(mail, password);

  const formData = {
    mail,
    password,
  };
  console.log(formData);
  form.reset();
}
