document.querySelectorAll('.blackout-button').forEach(button => {
    button.addEventListener('click', () => {
        const column = button.closest('.column');
        column.classList.toggle('blackout');
    });
});

const f1TrackLocation = document.querySelector('#f1-TrackLocation');
const f1Fp1 = document.querySelector('#f1Fp1');
const f1Fp2 = document.querySelector('#f1Fp2');
const f1Fp3 = document.querySelector('#f1Fp3');
const f1Qualifying = document.querySelector('#f1Qualifying');
const f1Race = document.querySelector('#f1Race');
async function loadSessions() {
    try {

        const response = await fetch("https://api.openf1.org/v1/sessions?meeting_key=latest&year=2026");
        const data = await response.json();

        console.log(data[0])

        f1TrackLocation.textContent = "Track: " + data[0].circuit_short_name + ", " + data[0].country_name;
        f1Fp1.textContent = "FP1: " + data[0].date_start;
        f1Fp2.textContent = "FP2: " + data[1].date_start;
        f1Fp3.textContent = "FP3: " + data[2].date_start;
        f1Qualifying.textContent = "Qualifying:" + data[3].date_start;
        f1Race.textContent = "Race: " + data[4].date_start;
    } catch (error) {
        console.error("Failed:", error);
    }
}

loadSessions();