// let hero = document.querySelector(".hero");
// let slider = document.querySelector(".slider");
// let animation = document.querySelector("section.animation-wrapper");

// const time_line = new TimelineMax();

// //parameter 1 >> 對象
// //2 >> duration
// //3 >> 原始狀態
// //4 >> 動畫結束後的狀態
// time_line
//   .fromTo(
//     hero,
//     1,
//     { height: "0%" },
//     { height: "100%", ease: Power2.easeIntOut }
//   )
//   .fromTo(
//     hero,
//     1.2,
//     { width: "80%" },
//     { width: "100%", ease: Power2.easeIntOut }
//   )
//   .fromTo(
//     slider,
//     1,
//     { x: "-100%" },
//     { x: "0%", ease: Power2.easeIntOut },
//     "-=1.2"
//   )
//   .fromTo(animation, 0.3, { opacity: "1" }, { opacity: "0" });

// setTimeout(() => {
//   animation.style.pointerEvents = "none";
// }, 2500);

window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let allSelect = document.querySelectorAll("select");
let allCredit = document.querySelectorAll(".class-credit");

allSelect.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });
});

allCredit.forEach((input) => {
  input.addEventListener("change", () => {
    setGPA();
  });
});

function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B-" ||
    target.value == "B+"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C-" ||
    target.value == "C+"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D-" ||
    target.value == "D+"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
  }
}

function setGPA() {
  let formLength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credit");
  let selects = document.querySelectorAll("select");
  let sum = 0;
  let creditSum = 0;

  for (let i = 0; i < credits.length; i++) {
    if (credits[i].valueAsNumber) {
      creditSum += credits[i].valueAsNumber;
      switch (selects[i].value) {
        case "A":
          sum += 4 * credits[i].valueAsNumber;
          break;
        case "A-":
          sum += 3.7 * credits[i].valueAsNumber;
          break;
        case "B+":
          sum += 3.3 * credits[i].valueAsNumber;
          break;
        case "B":
          sum += 3 * credits[i].valueAsNumber;
          break;
        case "B-":
          sum += 2.7 * credits[i].valueAsNumber;
          break;
        case "C+":
          sum += 2.3 * credits[i].valueAsNumber;
          break;
        case "C":
          sum += 2 * credits[i].valueAsNumber;
          break;
        case "C-":
          sum += 1.7 * credits[i].valueAsNumber;
          break;
        case "D+":
          sum += 1.3 * credits[i].valueAsNumber;
          break;
        case "D":
          sum += 1 * credits[i].valueAsNumber;
          break;
        case "D-":
          sum += 0.7 * credits[i].valueAsNumber;
          break;
        case "F":
          sum += 0;
          break;
      }
    }
  }
  if (creditSum == 0) {
    creditSum = 1;
  }
  let finalGPA = sum / creditSum;
  finalGPA = finalGPA.toFixed(2);

  document.getElementById("result-gpa").innerText = finalGPA;

  //   console.log(creditSum);
  //   console.log(sum);
  //   console.log(finalGPA);
}

let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("grader");

  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("placeholder", "class-category");
  newInput1.setAttribute("list", "opt");
  newInput1.classList.add("class-type");

  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "text");
  newInput2.setAttribute("placeholder", "class-number");
  newInput2.classList.add("class-number");

  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "number");
  newInput3.setAttribute("placeholder", "credits");
  newInput3.setAttribute("min", "0");
  newInput3.setAttribute("max", "6");
  newInput3.classList.add("class-credit");
  newInput3.addEventListener("change", () => {
    setGPA();
  });

  // here is the select tag
  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  let newButton = document.createElement("button");
  newButton.classList.add("trash-button");
  let newIcon = document.createElement("i");
  newIcon.classList.add("fas");
  newIcon.classList.add("fa-trash");

  newButton.appendChild(newIcon);

  newDiv.appendChild(newInput1);
  newDiv.appendChild(newInput2);
  newDiv.appendChild(newInput3);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newButton);

  newForm.appendChild(newDiv);
  document.querySelector(".all-inputs").appendChild(newForm);
  newForm.style.animation = "scaleUp 0.5s ease forwards";
});
