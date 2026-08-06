document.querySelectorAll('.blackout-button').forEach(button => {
    button.addEventListener('click', () => {
        const column = button.closest('.column');
        column.classList.toggle('blackout');
    });
});

const trackLocation = document.querySelector('#f1-trackLocation');

async function loadSessions() {
    try {

        const response = await fetch("https://api.openf1.org/v1/sessions?meeting_key=latest&year=2026");
        const data = await response.json();

        console.log(
            data[0].circuit_short_name,
            data[0].country_name

        );
        trackLocation.textContent = "Track: " + data[0].circuit_short_name + ", " + data[0].country_name;
    } catch (error) {
        console.error("Failed:", error);
    }
}

loadSessions();