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

// Get query params from URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    city: params.get('city')?.toLowerCase(),
    date: params.get('date'),
    category: params.get('category')
  };
}

// Render events to the event list page
function renderEvents() {
  const { city, date, category } = getQueryParams();
  const filtered = events.filter(event => {
    return (!city || event.location.toLowerCase().includes(city)) &&
           (!date || event.date === date) &&
           (!category || event.category === category);
  });

  const eventList = document.getElementById("eventList");
  if (!eventList) return;

  if (filtered.length === 0) {
    eventList.innerHTML = "<p>No events found.</p>";
    return;
  }

  filtered.forEach(event => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description}</p>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <a href="event-details.html?id=${event.id}" class="btn btn-primary">View Details</a>
        </div>
      </div>
    `;
    eventList.appendChild(col);
  });
}

// Show one event in event-details.html
function renderEventDetails() {
  const params = new URLSearchParams(window.location.search);
  const eventId = parseInt(params.get('id'));
  const event = events.find(e => e.id === eventId);

  const container = document.getElementById("eventDetails");
  if (!event || !container) return;

  container.innerHTML = `
    <div class="card p-4">
      <h2>${event.name}</h2>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p><strong>Category:</strong> ${event.category}</p>
      <p>${event.description}</p>
      <a href="events.html" class="btn btn-secondary mt-3">← Back to Events</a>
    </div>
  `;
}

// Call the right function based on page
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("events.html")) {
    renderEvents();
  } else if (window.location.pathname.includes("event-details.html")) {
    renderEventDetails();
  }
});
