const skill_listing = ["Intermediate Python Developer", "IT Support Specialist", "Basic Machine Learning Understanding", "HTML CSS Javascript", "React, Django and Flask MVC Development", "C++, C and Java programming"];
const sk_list = document.getElementById("skill_list");

const cities = [
  {
    name: "Intermediate Python Developer",
    population: 12300,
    safeToTravel: false,
    imageLink: "https://weneedfun.com/wp-content/uploads/2016/01/London-City-10.jpg"
  },
  {
    name: "IT Support Specialist",
    population: 21043,
    safeToTravel: true,
    imageLink: "https://www.bne.com.au/sites/default/files/MAIN_Tokyo_shutterstock_266840009.jpg"
  },
  {
    name: "Basic Machine Learning Understanding",
    population: 15000,
    safeToTravel: true,
    imageLink: "https://www.theparisreview.org/blog/wp-content/uploads/2018/01/a-boat-on-the-seine-liudanao1991-pixabay.jpg"
  }
]

function openCity(cityName) {
  let html = "";
  cities.map((item) => {
    if (item.name === cityName) {
      html += `
      <div class="tabcontent image-background" style="background-image: url(${item.imageLink});">
        <p>${cityName}</p>
        <p>${item.population}</p>
        <p>${item.safeToTravel === true ? "Can travel here" : "Can't travel here"}</p>
        
      </div>
    `
    }
  })
  document.querySelector("#res").innerHTML = `
    ${html}
  `;

}


document.addEventListener('DOMContentLoaded', function (event) {

  var dataText = ["An aspiring software developer.", "Learning about Machine Learning.", "Learning Web development.", "Learning IT Support Specialist."];


  function typeWriter(text, i, fnCallback) {
    if (i <= text.length) {

      document.querySelector("p").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';


      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
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
