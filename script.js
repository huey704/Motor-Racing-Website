// black out button code
document.querySelectorAll('.blackout-button').forEach(button => {
    button.addEventListener('click', () => {
        const column = button.closest('.column');
        column.classList.toggle('blackout');
    });
});

//const f1RaceName = document.querySelector('#f1-RaceName');
const f1TrackLocation = document.querySelector('#f1-TrackLocation');
const f1Fp1 = document.querySelector('#f1Fp1');
const f1Fp2 = document.querySelector('#f1Fp2');
const f1Fp3 = document.querySelector('#f1Fp3');
const f1Qualifying = document.querySelector('#f1Qualifying');
const f1Race = document.querySelector('#f1Race');
//F1 loading from the open F1 API
async function loadF1Sessions() {
    try {

        const response = await fetch("https://api.openf1.org/v1/sessions?meeting_key=latest&year=2026");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

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

loadF1Sessions();

const nascarRaceName = document.querySelector('#nascar-RaceName');
const nascarTrackLocation = document.querySelector('#nascar-TrackLocation');
const nascarP1 = document.querySelector('#nascarFp1');
const nascarQualifying = document.querySelector('#nascarQualifying');
const nascarRace = document.querySelector('#nascarRace');
const nascarStage1 = document.querySelector('#nascarStage1');
const nascarStage2 = document.querySelector('#nascarStage2');
const nascarStage3 = document.querySelector('#nascarStage3');

async function loadNascarSession() {
    try {
        const response = await fetch("https://cf.nascar.com/cacher/2026/1/race_list_basic.json")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        nascarRaceName.textContent = data[0].race_name
        nascarTrackLocation.textContent = "Track: " + data[0].track_name + ", USA"
        nascarRace.textContent = "Race: " + data[0].race_date
        nascarStage1.textContent = "Stage 1 laps : " + data[0].stage_1_laps
        nascarStage2.textContent = "Stage 2 laps : " + data[0].stage_2_laps
        nascarStage3.textContent = "Stage 3 laps : " + data[0].stage_3_laps

    } catch (error) {
        console.error("Failed:", error);
    }
}

loadNascarSession()