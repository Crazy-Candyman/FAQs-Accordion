import { generateQuestions } from "./html-JS.mjs";
import { faqsObjects } from "./faqs.mjs";

generateQuestions();
const text = document.querySelectorAll("article p");
const btn = document.querySelectorAll("article button");
const icon = document.querySelectorAll("article img");
const header = document.querySelectorAll("article h2");

const plusIcon = "assets/images/icon-plus.svg";
const minusIcon = "assets/images/icon-minus.svg";

for (let i = 0; i < faqsObjects.length; i++) {
  btn[i].addEventListener("click", ()=> {

      if (icon[i].getAttribute("src") == plusIcon) {
        icon[i].src=minusIcon
        icon[i].alt = "minus-icon"
        text[i].textContent = faqsObjects[i].answer
      } 
      else {
        icon[i].src=plusIcon;
        icon[i].alt = "plus-icon"
        text[i].textContent = '';
      }
  })
};

for (let i = 0; i < faqsObjects.length; i++) {
  header[i].addEventListener("click", ()=> {

      if (icon[i].getAttribute("src") == plusIcon) {
        icon[i].src=minusIcon;
        text[i].textContent = faqsObjects[i].answer
      } 
      else {
        icon[i].src=plusIcon;
        text[i].textContent = '';
      }
  })
};
