import { faqsObjects } from "./faqs.mjs";

export function generateQuestions() {
  faqsObjects.forEach((faq)=> {
    document.querySelector("section").innerHTML += `
        <article>
          <h2>${faq.question}</h2>
          <button>
            <img src=${faq.btnImage} alt="plus-icon" />
          </button>
          <p></p>
        </article>
         `
  })
}