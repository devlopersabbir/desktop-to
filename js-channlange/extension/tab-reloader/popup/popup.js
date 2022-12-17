const onSubmiteFrom = document.getElementById("onSubmiteFrom");
const removeBtn = document.getElementById("interval__remove__button");

const formSubmit = (e) => {
  e.preventDefault();
  const minute = Number(document.getElementById("minute").value);
  const second = Number(document.getElementById("second").value);
  //   console.log(minute, second);
  const convertToSecond = (minute * 60 + second) * 1000;
  setInterval(() => {
    console.log("hello");
  }, convertToSecond);
};
const clearAllInput = () => {
  document.getElementById("minute").value = "";
  document.getElementById("second").value = "";
};

removeBtn.addEventListener("click", clearAllInput);
onSubmiteFrom.addEventListener("submit", formSubmit);
