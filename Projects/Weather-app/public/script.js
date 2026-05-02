const btn = document.getElementById("btn");
const result = document.getElementById("result");

// Promise + setTimeout
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function
async function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    result.innerText = "Enter city!";
    return;
  }

  result.innerText = "Loading...";

  await delay(1000);

  try {
    let response = await fetch(`/weather?city=${city}`);
    let data = await response.json();

    // DOM manipulation
    result.innerText = data.result;

  } catch (error) {
    result.innerText = "Error!";
  }
}

btn.addEventListener("click", getWeather);