let x=0;
let txt= "Welcome to the official website of Eleftherios Chondromatidis!";
let title;
let met=0;
let ind=0;


function typeWriter() {
  if ((x < txt.length)) {
    document.querySelector(".title_of_home").innerHTML += txt.charAt(x);
    x=x+1;
    setTimeout(typeWriter, 70);
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

function ausl()
{
	setTimeout(ausl,1500);
	const images=document.querySelectorAll(".lang");
	for (let x=0; x<images.length; ++x)
	{
		images[x].style.display="none";
	}
	ind=ind+1;
	if (ind > images.length)
	{
		ind=1;
	}
	images[ind-1].style.display="block";
}

ausl();