let arr = [];
for (let i = 1; i <= 3; i += 1) {
  const number = parseInt(prompt(`Вкажіть ${i} сторону трикутника`), 10);
  if (!isNaN(number)) {
    arr.push(number);
  }
}

if (arr.length < 3) {
  alert("Incorrect data");
} else {
  const p = arr.reduce((a, b) => a + b, 0) / 2;
  console.log(p);

  let s = Math.sqrt(p * (p - arr[0]) * (p - arr[1]) * (p - arr[2])).toFixed(3);

  console.log(`Площа трикутник: ${s}`);

  arr = arr.sort((a, b) => a - b);

  if (arr[2] === Math.hypot(arr[0], arr[1])) {
    console.log("Трикутник прямокутній");
  } else {
    console.log("Трикутник не прямокутній");
  }
}
