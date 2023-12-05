const captchatextbox = document.querySelector(".captch_box input");
const refreshbutton = document.querySelector(".refresh_button");
const captchainputbox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const submitbutton = document.querySelector(".button");

let captchatext = null;

const generatecaptcha = () => {
  const randomstring = Math.random().toString(36).substring(2, 7);
  const randomstringarray = randomstring.split("");
  const changestring = randomstringarray.map((char) =>
    Math.random() > 0.5 ? char.toUpperCase() : char
  );
  captchatext = changestring.join("  ");
  captchatextbox.value = captchatext;

  console.log(randomstringarray, changestring);
};
const refreshbtnclick = () => {
  generatecaptcha();
  captchainputbox.value = "";
  captchakeyupvalidate();
};
const captchakeyupvalidate = () => {
  submitbutton.classList.toggle("disabled", !captchainputbox, value);
  if (captchainputbox.value === " ") {
    message.classList.remove("active");
  }
};
const submitbtnclick = () => {
  captchatext = captchatext.split("");

  captchatext = captchatext.filter((char) => char !== " ");
  captchatext = captchatext.join("");
  message.classList.add("active");
  if (captchainputbox.value === captchatext) {
    message.innerText = "Enterd captcha is correct";
  } else {
    message.innerText = "Try again";
    message.style.color = "#FF2525";
  }
};
refreshbutton.addEventListener("click", refreshbtnclick);
captchainputbox.addEventListener("keyup", captchakeyupvalidate);
submitbutton.addEventListener("click", submitbtnclick);

generatecaptcha();
