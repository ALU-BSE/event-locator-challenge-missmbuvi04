// js/main.js

const events = [
  {
    id: 1,
    name: "Nairobi Tech Summit",
    date: "2025-08-01",
    location: "Nairobi",
    category: "Tech",
    description: "An exciting gathering of Kenya’s brightest minds in tech."
  },
  {
    id: 2,
    name: "Mombasa Music Carnival",
    date: "2025-08-10",
    location: "Mombasa",
    category: "Music",
    description: "A beachside music event celebrating African sounds."
  },
  {
    id: 3,
    name: "Art in the Park",
    date: "2025-08-15",
    location: "Nairobi",
    category: "Art",
    description: "An exhibition of art from emerging local talents."
  }
];

// Dynamically render event cards
function renderEvents() {
  const eventList = document.getElementById("eventList");
  if (!eventList) return;

  eventList.innerHTML = ""; // Clear any existing

  events.forEach(event => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text small text-muted mb-2">${event.date} | ${event.location}</p>
          <p class="card-text">${event.description}</p>
          <a href="event-details.html?id=${event.id}" class="btn btn-outline-primary btn-sm mt-3">View Details</a>
        </div>
      </div>
    `;

    eventList.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("events.html")) {
    renderEvents();
  }
});
