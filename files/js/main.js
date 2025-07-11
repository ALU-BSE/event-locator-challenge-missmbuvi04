// main.js

// If we're on index.html
if (window.location.pathname.includes("index.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");

    searchForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const query = document.getElementById("searchInput").value;
      const date = document.getElementById("dateFilter").value;
      const category = document.getElementById("categoryFilter").value;

      // ✅ Prevent search unless at least date or category is selected
      if (!date && !category) {
        alert("Please select a date or category to filter events.");
        return;
      }

      const searchFilters = { query, date, category };
      localStorage.setItem("searchFilters", JSON.stringify(searchFilters));
      window.location.href = "events.html";
    });
  });
}


// If we're on events.html
if (window.location.pathname.includes("events.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const events = [
  {
    id: 1,
    name: "Nairobi Startup Fair",
    date: "2025-07-13",
    location: "Nairobi",
    category: "All",
    description: "Meet startups and innovators from across Nairobi showcasing their work.",
  },
  {
    id: 2,
    name: "Health & Wellness Expo",
    date: "2025-07-13",
    location: "Nairobi",
    category: "All",
    description: "Explore holistic health practices, yoga, and wellness products.",
  },
  {
    id: 3,
    name: "Creative Market Day",
    date: "2025-07-14",
    location: "Mombasa",
    category: "All",
    description: "A colorful market of handmade crafts, foods, and art from local creatives.",
  },
  {
    id: 4,
    name: "Young Innovators Showcase",
    date: "2025-07-14",
    location: "Mombasa",
    category: "All",
    description: "Celebrating creativity and tech projects from youth across the coast.",
  },
  {
    id: 5,
    name: "Green Expo Kenya",
    date: "2025-07-16",
    location: "Naivasha",
    category: "All",
    description: "Explore sustainability projects and meet eco-friendly businesses.",
  },
  {
    id: 6,
    name: "Sunset Food Festival",
    date: "2025-07-18",
    location: "Kisumu",
    category: "All",
    description: "Enjoy street food, drinks, and music by the lake during sunset.",
  },
  {
    id: 7,
    name: "Local Talent Music Jam",
    date: "2025-07-18",
    location: "Kisumu",
    category: "All",
    description: "Upcoming artists perform live. Discover new sounds from the lakeside.",
  },
  {
    id: 8,
    name: "Innovation & Tech Day",
    date: "2025-07-20",
    location: "Eldoret",
    category: "All",
    description: "A technology showcase of ideas by students, coders, and engineers.",
  },
  {
    id: 9,
    name: "Kenya Poetry Jam",
    date: "2025-07-21",
    location: "Nairobi",
    category: "All",
    description: "Spoken word meets beats. An open mic for poets and word artists.",
  },
  {
    id: 10,
    name: "Women in Business Fair",
    date: "2025-07-21",
    location: "Nairobi",
    category: "All",
    description: "Entrepreneurship booths, pitch competitions, and empowerment talks.",
  },
  {
    id: 11,
    name: "Cultural Fashion Parade",
    date: "2025-07-23",
    location: "Thika",
    category: "All",
    description: "A showcase of African fashion with a fusion of tradition and creativity.",
  },
  {
    id: 12,
    name: "Community Art Mural Day",
    date: "2025-07-23",
    location: "Thika",
    category: "All",
    description: "Paint alongside artists to create a new public mural in town!",
  },
  {
    id: 13,
    name: "Creative Film Night",
    date: "2025-07-25",
    location: "Nakuru",
    category: "All",
    description: "Screenings of indie short films from across Kenya's rising filmmakers.",
  },
  {
    id: 14,
    name: "Digital Creators Meetup",
    date: "2025-07-25",
    location: "Nakuru",
    category: "All",
    description: "A gathering of vloggers, designers, and digital creatives to network.",
  },
  {
    id: 15,
    name: "Photography Pop-Up",
    date: "2025-07-26",
    location: "Machakos",
    category: "All",
    description: "Walk-in photo shoots, editing booths, and mobile exhibitions.",
  },
  {
    id: 16,
    name: "Machakos Skate Festival",
    date: "2025-07-26",
    location: "Machakos",
    category: "All",
    description: "Skateboarding battles, gear pop-ups, and DJ sessions all day.",
  },
  {
    id: 17,
    name: "Kenya Tech Meet & Pitch",
    date: "2025-07-27",
    location: "Nyeri",
    category: "All",
    description: "Startup pitches, networking booths, and tech hiring zones.",
  },
  {
    id: 18,
    name: "Agribusiness & Green Farming Day",
    date: "2025-07-27",
    location: "Nyeri",
    category: "All",
    description: "Learn how tech is transforming farming and sustainable agriculture.",
  },
  {
    id: 19,
    name: "Gaming Culture Expo",
    date: "2025-07-29",
    location: "Kakamega",
    category: "All",
    description: "Cosplay, tournaments, indie game demos, and prizes!",
  },
  {
    id: 20,
    name: "Kenya Culture Fest Finale",
    date: "2025-07-30",
    location: "Nairobi",
    category: "All",
    description: "Closing ceremony with music, dance, food, and cultural exhibitions.",
  }
];


    const filters = JSON.parse(localStorage.getItem("searchFilters") || '{}');
    const query = (filters.query || "").toLowerCase();
    const date = filters.date || "";
    const category = filters.category || "";

    const filteredEvents = events.filter(event => {
      const matchesQuery = event.name.toLowerCase().includes(query);
      const matchesDate = !date || event.date === date;
      const matchesCategory = !category || event.category === category;
      return matchesQuery && matchesDate && matchesCategory;
    });

    const container = document.getElementById("eventContainer");
    container.innerHTML = "";

    if (filteredEvents.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center text-muted">
          😕 No events found. Try different filters.
        </div>`;
    } else {
      filteredEvents.forEach(event => {
        const card = document.createElement("div");
        card.className = "col-md-6 col-lg-4 mb-4";
        card.innerHTML = `
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p><span class="badge bg-secondary">${event.category}</span></p>
              <p><strong>📅</strong> ${event.date}</p>
              <p><strong>📍</strong> ${event.location}</p>
              <p class="text-muted">${event.description.substring(0, 80)}...</p>
              <button class="btn btn-custom mt-2" data-event='${JSON.stringify(event)}'>View Details</button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });

      // Attach listeners to "View Details" buttons
      document.querySelectorAll(".btn-custom").forEach(button => {
        button.addEventListener("click", () => {
          const event = JSON.parse(button.getAttribute("data-event"));
          localStorage.setItem("selectedEvent", JSON.stringify(event));
          window.location.href = "event-details.html";
        });
      });
    }
  });
}
