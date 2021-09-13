document.addEventListener('DOMContentLoaded',function(event){
  
  var dataText = [ "An aspiring software developer.", "Learning about Machine Learning.", "Learning Web development.", "Learning IT Support Specialist."];
  
  
  function typeWriter(text, i, fnCallback) {
    if (i <= text.length) {
      
     document.querySelector("p").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     } else if (i < dataText[i].length) {
      
     typeWriter(dataText[i], 0, function(){
       
       StartTextAnimation(i + 1);
     });
    }
  }
  
  StartTextAnimation(0);
});

const skill_listing = ["Intermediate Python Developer", "IT Support Specialist", "Introductory Machine Learning Understanding", "HTML CSS Javascript", "React, Django and Flask MVC Development", "C++, C and Java programming"];
const cert_listing = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];
const sk_list = document.getElementById("skill_list");
const ct_list = document.getElementById("cert_list");

skill_listing.forEach((item) => {
  let p = document.createElement("div");
  p.className = "grid-item";
  p.innerText = item;
  sk_list.appendChild(p);
})
cert_listing.forEach((item) => {
  let p = document.createElement("div");
  p.className = "grid-item";
  p.innerText = item;
  ct_list.appendChild(p);
})
