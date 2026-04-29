let trips = JSON.parse(localStorage.getItem("trips")) || [];

// Load saved trips on page load
window.onload = function () {
  trips.forEach(trip => displayTrip(trip));
};

function planTrip() {
  const destination = document.getElementById("destination").value.trim();
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const budget = document.getElementById("budget").value;

  // Form Validation
  if (!destination) {
    alert("Please enter destination");
    return;
  }

  if (!startDate || !endDate) {
    alert("Please select dates");
    return;
  }

  if (startDate > endDate) {
    alert("End date must be after start date");
    return;
  }

  document.getElementById("loading").style.display = "block";

  // setTimeout (simulate loading)
  setTimeout(() => {
    fetchWeather(destination);
  }, 2000);
}

// Fetch API + Promise
function fetchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("loading").style.display = "none";

      const weather = `Temp: ${data.main.temp}°C, ${data.weather[0].description}`;

      const trip = {
        city: city,
        info: weather
      };

      trips.push(trip);
      localStorage.setItem("trips", JSON.stringify(trips));

      displayTrip(trip);
    })
    .catch(() => alert("City not found"));
}

// DOM Manipulation
function displayTrip(trip) {
  const tripsDiv = document.getElementById("trips");

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${trip.city}</h3>
    <p>${trip.info}</p>
    <button onclick="deleteTrip(this)">Delete</button>
  `;

  tripsDiv.appendChild(card);
}

// Delete Trip
function deleteTrip(button) {
  const card = button.parentElement;
  card.remove();

  // Optional: Clear all from storage (simple way)
  localStorage.clear();
}