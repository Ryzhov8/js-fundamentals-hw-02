const date = new Date();
const hours = date.getHours();

if (hours >= 5 && hours < 11) {
  alert("Доброго ранку!");
} else if (hours >= 11 && hours < 17) {
  alert("Доброго дня!");
} else if (hours >= 17 && hours < 23) {
  alert("Доброго вечора!");
} else {
  alert("Доброї ночі!");
}

switch (hours) {
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    alert("Доброго ранку!");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
    alert("Доброго дня!");
    break;
  case 17:
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
    alert("Доброго вечора!");
    break;
  case 23:
  case 24:
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    alert("Доброї ночі!");
    break;

  default:
    break;
}
