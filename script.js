//3.For loop with concatination to reduce repetition

const value = document.getElementById("message").textContent;
let result="";

for (let i=0; i<4; i++) {
  result+= value + " ";
}
document.getElementById("message").textContent= result;


const rollButton = document.getElementById('Roll');
function rollTheDice() {
    // Generate a number between 1 and 4
    const randomNumber = Math.floor(Math.random() * 4 + 1);
    // Assign generated number to element with id of 'Output'
  
  let el = document.getElementById('Output');
  
  //8.A.Make changes to CSS by adding creative element: roll-animation
  
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; 
  el.className = "rotate";
  el.textContent = randomNumber;
}

//7.Get input from the user on the web page

rollButton.addEventListener('click', rollTheDice);

//2.Data structure like an array to store values

const list = document.getElementById('specialisations');
const items = list.getElementsByTagName('li');

//1.A. Boolean values to branch logic of program

let index = 0;
function showNextItem() {
  if (index <= items.length-1) {
    items[index].style.visibility = "visible";
    index++;
    setTimeout(showNextItem, 1000);
  }
}

showNextItem();

//Function to create new element

function addGirlStudent() {
  const girlStudent = document.createElement('span');
  girlStudent.textContent = '👩‍🎓';
  girlStudent.style.paddingLeft = '20px';
  document.body.appendChild(girlStudent);
  
}
//9.Event to trigger a change to the web page

setTimeout(addGirlStudent, 4500);

// 8.A. Make changes to HTML elements to get references
const specialisationSelect = document.getElementById("specialisation");
const specialisationText = document.getElementById("specialisation-text");
const specialisationInfo = document.querySelector(".specialisation-info");

//4.Function to make code reusable 

function updateSpecialisation() {
    const selectedSpecialisation = specialisationSelect.value;
    const specialisations = {
        software: "Software Engineering focuses on programming and software development.",
        fullstack: "Full Stack track covers both front-end and back-end development.",
        data: "Data career pathway involves working with data analysis and data science.",
        product: "Product specialisation deals with product management and development."
    };

    //1.B. If..else statements to branch logic of program
  
    if (selectedSpecialisation in specialisations) {
        specialisationText.textContent = specialisations[selectedSpecialisation];
        specialisationInfo.style.display = "block";
    } else {
        specialisationText.textContent = "Please select a valid specialisation.";
        specialisationInfo.style.display = "none";
    }
}

document.querySelector("#us-button").addEventListener("click", () => updateSpecialisation());

function showNamePopup() {
    const namePopup = document.getElementById("namePopup");
    namePopup.style.display = "block";
}

function closeNamePopup() {
    const namePopup = document.getElementById("namePopup");
    namePopup.style.display = "none";
}

//5.Use console.log and alert to display messages

function submitName() {
    const userNameInput = document.getElementById("userNameInput").value;
    closeNamePopup(); // Close the pop-up
    if (userNameInput) {
        // Display the personalized welcome message with a discount
        alert(`${userNameInput}, Welcome to the CFG Degree! You are offered a 50% discount!`);
    } else {
        alert("Please enter your name.");
    }
}

//6. Use 4 different HTML tags and at least 2 CSS styles: <----HTML and <----CSS codepens