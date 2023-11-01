let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
one.innerHTML = `${Math.floor(Math.random() * 10)}`;
two.innerHTML = `${Math.floor(Math.random() * 10)}`;
three.innerHTML = `${Math.floor(Math.random() * 10)}`;
four.innerHTML = `${Math.floor(Math.random() * 10)}`;
five.innerHTML = `${Math.floor(Math.random() * 10)}`;
six.innerHTML = `${Math.floor(Math.random() * 10)}`;
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", function () {
  one.innerHTML = `${Math.floor(Math.random() * 10)}`;
  two.innerHTML = `${Math.floor(Math.random() * 10)}`;
  three.innerHTML = `${Math.floor(Math.random() * 10)}`;
  four.innerHTML = `${Math.floor(Math.random() * 10)}`;
  five.innerHTML = `${Math.floor(Math.random() * 10)}`;
  six.innerHTML = `${Math.floor(Math.random() * 10)}`;
});
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let res = String(
  `${one.innerHTML}${two.innerHTML}${three.innerHTML}${four.innerHTML}${five.innerHTML}${six.innerHTML}`
);

btn.addEventListener("click", function () {
  console.log(res);
  console.log(input.value);
  if (input.value == Number(res)) {
    alert("You are human...");
    input.value = "";
  } else {
    alert("You are Robot...");
    input.value = "";
  }

  one.innerHTML = `${Math.floor(Math.random() * 10)}`;
  two.innerHTML = `${Math.floor(Math.random() * 10)}`;
  three.innerHTML = `${Math.floor(Math.random() * 10)}`;
  four.innerHTML = `${Math.floor(Math.random() * 10)}`;
  five.innerHTML = `${Math.floor(Math.random() * 10)}`;
  six.innerHTML = `${Math.floor(Math.random() * 10)}`;
  res = String(
    `${one.innerHTML}${two.innerHTML}${three.innerHTML}${four.innerHTML}${five.innerHTML}${six.innerHTML}`
  );
});
