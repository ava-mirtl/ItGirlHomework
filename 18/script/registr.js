const email = document.querySelector("#email");
const btn = document.querySelector(".red");
const password = document.querySelector("#password");
const age = document.querySelector("#age");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  checkEmail(email);
  checkPass(password);
  checkAge(age);
});

function checkEmail(email) {
  const msg1 = document.querySelector(".msg1");
  if (email.value == "") {
    msg1.innerHTML =
      "Вы кое-что забыли! Укажите свой адрес электронной почты.";
  } else if (!mailTest(email)) {
    msg1.innerHTML = "Хм… Это не похоже на адрес электронной почты";
  } else {
    msg1.innerHTML = "";
  }
}

function checkPass(password) {
  const msg2 = document.querySelector(".msg2");
  if (password.value == "" || password.value.length < 6) {
    msg2.innerHTML =
      "Слишком короткий пароль. Он должен содержать не менее 6 символов.";
  }
  else if (password.value.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/)){
    msg2.innerHTML = ""
  }
  else  {
    msg2.innerHTML = "Используйте только сочетания строчных и заглавных букв латиницей, цифр и специальных символов (например: ?, !, $).";
  }




}
function checkAge(age) {
  const msg3 = document.querySelector(".msg3");

  if (age.value == "") {
    msg3.innerHTML = "Вы кое-что забыли! Скажите, сколько вам лет.";
  } else if (+age.value > 100) {
    msg3.innerHTML = "Введите правильный номер.";
  } else if (!ageTest(age)) {
    msg3.innerHTML = "Введите правильный номер.";
  }
  else {
    msg3.innerHTML = "";
  }
}

function ageTest(age) {
  return RegExp("^[0-9]+$").test(age.value);
}
function mailTest(email) {
  return new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}").test(email.value);
}
