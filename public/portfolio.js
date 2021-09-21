const skill_listing = ["Intermediate Python Developer", "IT Support Specialist", "Basic Machine Learning Understanding", "HTML CSS Javascript", "React, Django and Flask MVC Development", "C++, C and Java programming"];
const sk_list = document.getElementById("skill_list");

const cities = [
  {
    name: "Intermediate Python Developer",
    qualification: "Google IT Automation with Python Certificate",
    safeToTravel: false,
    imageLink: "./assets/python-skill.svg"
  },
  {
    name: "IT Support Specialist",
    qualification: "Google IT Support Specialist Certificate",
    safeToTravel: true,
    imageLink: "./assets/it-support.svg"
  },
  {
    name: "Basic Machine Learning Understanding",
    qualification: "Amazon AWS Machine Learning Introductory Course",
    safeToTravel: true,
    imageLink: "./assets/ml-basic.svg"
  }
]

function openCity(cityName) {
  let html = "";
  cities.map((item) => {
    if (item.name === cityName) {
      html += `
      <div class="tabcontent image-background" style="background-image: url(${item.imageLink});">
        <p class="heading">${item.name}</p>
        <p class="heading">${item.qualification}</p>
        <p class="heading">${item.safeToTravel === true ? "Can travel here" : "Can't travel here"}</p>
        
      </div>
    `
    }
  })
  document.querySelector("#res").innerHTML = `
    ${html}
  `;

}


document.addEventListener('DOMContentLoaded', function (event) {

  var dataText = ["An aspiring software engineer.", "Learning about Machine Learning.", "Learning Web development.", "Obtained Google IT Support Specialist Certificate."];


  function typeWriter(text, i, fnCallback) {
    if (i <= text.length) {

      document.querySelector("p").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';


      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 90);
    }

    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    } else if (i < dataText[i].length) {

      typeWriter(dataText[i], 0, function () {

        StartTextAnimation(i + 1);
      });
    }
  }

  StartTextAnimation(0);



  let HTML = "";
  skill_listing.forEach((item) => {
    HTML += `
      <button class="btnDisplay" onclick="openCity('${item}')">
        <div class="grid-item">
          ${item}
        </div>
      
      </button>
    `
    
  })
  
  document.querySelector("#skill_list").innerHTML = `
    ${HTML}
  `;
});







const cert_listing = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];

const ct_list = document.getElementById("cert_list");



cert_listing.forEach((item) => {
  let p = document.createElement("div");

  p.className = "grid-item";
  p.innerText = item;
  ct_list.appendChild(p);
})
