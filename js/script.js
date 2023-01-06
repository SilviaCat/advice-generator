const btn = document.getElementById("genera");
const adviceId = document.getElementById("id-advice");
const quote = document.getElementById("quote");

const genera = async () => {
  let response = await fetch("https://api.adviceslip.com/advice", {cache: "no-store"});
  let data = await response.json();

  displayAdvice(data.slip)
}


const displayAdvice = (advice) => {
    adviceId.innerText = "Advice #"+advice.id;
    quote.innerText = '"'+advice.advice+'"';
}

btn.addEventListener('click', () => {
  genera();
})

