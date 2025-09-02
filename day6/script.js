const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("new");

async function getquote() {
  try {
    let response = await fetch("https://quotes.domiadi.com/api");
    let data = await response.json();

    quote.textContent = `"${data.quote || data.content || data.text}"`;
    author.textContent = data.author ? `— ${data.author}` : "";
  } catch (err) {
    quote.textContent = "Oops! Something went wrong.";
    author.textContent = "";
    console.error("Error fetching quote:", err);
  }
}

getquote();

btn.addEventListener("click", getquote);
