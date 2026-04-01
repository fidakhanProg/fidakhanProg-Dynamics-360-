let eventsData = [];

const container = document.getElementById("event-container");

// Load JSON
fetch("assets/events.json")
    .then(response => response.json())
    .then(data => {
        eventsData = data;
        displayEvents(eventsData);
    })
    .catch(error => console.log("Error:", error));

// Display Events
function displayEvents(events) {
    container.innerHTML = "";

    events.forEach(event => {
        const card = `
            <div class="card">
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
                <button onclick="registerEvent('${event.name}')">Register</button>
            </div>
        `;
        container.innerHTML += card;
    });
}


function registerEvent(name) {
    alert("Registered for: " + name);
}

// Search Function
document.getElementById("search").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    const filtered = eventsData.filter(event =>
        event.name.toLowerCase().includes(value)
    );

    displayEvents(filtered);
});