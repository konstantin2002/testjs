
alert("Are you excited to see the content?");
/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/earth.jfif") {
      myImage.setAttribute("src", "images/mars.jfif");
    } else {
      myImage.setAttribute("src", "images/earth.jfif");
    }
  };
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  var myName;
  while (!myName) {
    myName = prompt("Please enter your name.");
  }
  
  localStorage.setItem("name", myName);
  myHeading.textContent = `The Earth is cool, ${myName}`;
}

myButton.onclick = () => {
  setUserName();
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}