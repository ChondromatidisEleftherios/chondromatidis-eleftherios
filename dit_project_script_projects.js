window.scrollTo(0,0);

let x=0;
let txt= "Personal Programming Projects";
let title;
let met=0;
let ind=0;


function typeWriter2() {
  if ((x < txt.length)) {
    document.querySelector(".title_of_projects").innerHTML += txt.charAt(x);
    x=x+1;
    setTimeout(typeWriter2, 65);
  }
}

window.addEventListener("DOMContentLoaded", function() {
const fadeInSections = document.querySelectorAll('.fade-in-section');

    
const observer = new IntersectionObserver((entries, observer) => { /*chatGPT*/
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      
      fadeInSections.forEach(section => {
        observer.observe(section);
      });
    }); /*until here*/



let link1_header= document.querySelector(".link1");
let left_side_h1= document.querySelector(".left_sideH");
let link2_header= document.querySelector(".link2");
let link3_header= document.querySelector(".link3");
let link4_header= document.querySelector(".link4");
let link4_links= document.querySelector(".links_down");
link1_header.addEventListener("mouseover", blink1);
link1_header.addEventListener("mouseout", rem_blink1);
link2_header.addEventListener("mouseover", blink2);
link2_header.addEventListener("mouseout", rem_blink2);
link3_header.addEventListener("mouseover", blink3);
link3_header.addEventListener("mouseout", rem_blink3);
link4_header.addEventListener("mouseover", blink4);
link4_header.addEventListener("mouseout", rem_blink4);
link4_links.addEventListener("mouseover", blink4);
link4_links.addEventListener("mouseout", rem_blink4);

function blink1()
{
  link1_header.style["background-color"]='#179669';
}

function rem_blink1()
{
  link1_header.style["background-color"]="#1fb588";
}

function blink2()
{
  link2_header.style["background-color"]='#179669';
}

function rem_blink2()
{
  link2_header.style["background-color"]="#1fb588";
}

function blink3()
{
  link3_header.style["background-color"]='#179669';
}

function rem_blink3()
{
  link3_header.style["background-color"]="#1fb588"
}

function blink4()
{
  link4_header.style["background-color"]='#179669';
}

function rem_blink4()
{
  link4_header.style["background-color"]="#1fb588"
}