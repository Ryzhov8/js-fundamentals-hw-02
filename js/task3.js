const isAdult = parseInt(prompt("Вкажіть Ваш вік"), 10);
let message;

if (isNaN(isAdult)) {
  message = "Введенно некоректні дані";
} else {
  if (isAdult >= 18) {
    message = "Ви досягли повнолітнього віку";
  } else {
    message = "Ви ще надто молоді";
  }
}

alert(message);
