const input = document.querySelector("#validation-input");
input.addEventListener("blur", onInput);

function onInput(evt) {
  const inputValueLength = evt.target.value.length;
  const inputDataLength = Number.parseInt(evt.target.dataset.length);

  if (inputValueLength !== inputDataLength) {
    this.classList.add("invalid");
  } else {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }
}
