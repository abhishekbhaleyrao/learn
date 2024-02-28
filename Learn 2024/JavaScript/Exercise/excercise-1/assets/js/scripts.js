// Basics
function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.querySelector(".basics-external").appendChild(para);
}

function createParagraphInternal() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.querySelector(".basics-internal").appendChild(para);
}

// Overview - condition
const conditionBtn = document.querySelector(".overview-condition .my-button");
conditionBtn.addEventListener("click", onClickOverviewEventBtn);

function onClickOverviewConditionBtn() {
  if (6 === 6) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// Overview - event
const eventBtn = document.querySelector(".overview-event .my-button");
eventBtn.addEventListener("click", onClickOverviewEventBtn);

function onClickOverviewEventBtn() {
  console.log("my-button clicked!");
}

// Overview - loop
const loopBtn = document.querySelector(".overview-loop .my-button");
loopBtn.addEventListener("click", onClickOverviewLoopBtn);

function onClickOverviewLoopBtn() {
  for (let i = 1; i < 5; i++) {
    console.log(i);
  }
}

// Overview - browser-object
const boBtn = document.querySelector(".overview-browser-object .my-button");
boBtn.addEventListener("click", onClickBOBtn);

function onClickBOBtn() {
  console.log("Button value: ", boBtn.value);
  boBtn.textContent = "Changed!";
  boBtn.style.backgroundColor = "yellow";
  boBtn.style.fontSize = "120%";
  boBtn.style.padding = "5px";
  boBtn.style.boxShadow = "3px 3px 6px black";
}

// Condition - else if
const select = document.querySelector(".else-if select");
const para = document.querySelector(".else-if p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent = "It is nice and sunny outside.";
  } else if (choice === "rainy") {
    para.textContent = "Rain is falling outside.";
  } else {
    para.textContent = "";
  }
}

// Condition - switch
const select1 = document.querySelector(".switch select");
const para1 = document.querySelector(".switch p");

select1.addEventListener("change", setWeather1);

function setWeather1() {
  const choice = select1.value;

  switch (choice) {
    case "sunny":
      para1.textContent = "It is nice and sunny outside.";
      break;
    case "rainy":
      para1.textContent = "Rain is falling outside.";
      break;
    default:
      para1.textContent = "";
  }
}

// Condition - ternary
const htmlTernary = document.querySelector(".ternary");
const selectTernary = document.querySelector(".ternary select");

function update(bgColor, textColor) {
  htmlTernary.style.backgroundColor = bgColor;
  htmlTernary.style.color = textColor;
}

selectTernary.onchange = function () {
  selectTernary.value === "black"
    ? update("black", "white")
    : update("white", "black");
};

// Events - click
const htmlEC = document.querySelector(".events-click");
const btnEC = document.querySelector(".events-click button");

function randomEC(number) {
  return Math.floor(Math.random() * (number + 1));
}

btnEC.onclick = function () {
  const rndCol =
    "rgb(" + randomEC(255) + "," + randomEC(255) + "," + randomEC(255) + ")";
  htmlEC.style.padding = "5px";
  htmlEC.style.backgroundColor = rndCol;
};

// Events-prevent
const formEP = document.querySelector(".events-prevent form");
const fnameEP = document.getElementById("fnameEP");
const paraEP = document.querySelector(".events-prevent p");

formEP.onsubmit = function (e) {
  if (fnameEP.value === "") {
    e.preventDefault();
    paraEP.textContent = "You need to fill name!";
  } else {
    para.textContent = "";
  }
};

// Blocking code
const blockingBtn = document.querySelector("#blockingBtn");
blockingBtn.addEventListener("click", () => {
  let myDate;
  for (let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date;
  }

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  blockingBtn.parentNode.appendChild(pElem);
});

// Synchronous JavaScript
const synchronousBtn = document.querySelector("#synchronousBtn");
synchronousBtn.addEventListener("click", () => {
  alert("You clicked me!");

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  synchronousBtn.parentNode.appendChild(pElem);
});

// Timeout
const timeout = document.querySelector("#timeout");
let timeoutExample;
timeout.addEventListener("click", () => {
  timeoutExample = setTimeout(function () {
    alert("Hello, Mr. Universe!");
  }, 3000);
});

// Clear Timeout
const stopTimeout = document.querySelector("#stopTimeout");
stopTimeout.addEventListener("click", () => {
  clearTimeout(timeoutExample);
});

// Interval
const interval = document.querySelector("#interval");
let intervalExample;
interval.addEventListener("click", () => {
  intervalExample = setInterval(() => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    alert(time);
  }, 3000);
});

// Clear Interval
const stopInterval = document.querySelector("#stopInterval");
stopInterval.addEventListener("click", () => {
  clearInterval(intervalExample);
});
