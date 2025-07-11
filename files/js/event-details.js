// event-details.js

document.addEventListener("DOMContentLoaded", () => {
  const event = JSON.parse(localStorage.getItem("selectedEvent"));

  const titleEl = document.getElementById("eventTitle");
  const infoEl = document.getElementById("eventInfo");

  if (event) {
    titleEl.textContent = event.name;
    infoEl.innerHTML = `
      <p><strong>📅 Date:</strong> ${event.date}</p>
      <p><strong>📍 Location:</strong> ${event.location}</p>
      <p><strong>🎨 Category:</strong> ${event.category}</p>
      <p class="mt-4">${event.description}</p>
    `;
  } else {
    titleEl.textContent = "Event Not Found";
    infoEl.innerHTML = `<p class="text-muted">No event data available. Please go back and try again.</p>`;
  }
});
