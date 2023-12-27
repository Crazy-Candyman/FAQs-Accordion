import { faqsObjects } from "./faqs.mjs";


// This is a function that loops through the FAQs objects and
// generates the HTML.
export function generateQuestions() {
  faqsObjects.forEach((faq)=> {
    document.querySelector("main").innerHTML += `
        <article>
          <h2>${faq.question}</h2>
          <button>
            <img src="assets/images/icon-plus.svg" alt="plus-icon" />
          </button>
          <p></p>
        </article>
         `
  })
}