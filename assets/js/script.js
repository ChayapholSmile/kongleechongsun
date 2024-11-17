// script.js
window.onload = async () => {
    // Simulate loading time (replace with actual loading logic)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Hide loader and show content
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";

    // Fetch data from Google Sheets (replace YOUR_SCRIPT_ID with actual ID)
    fetchSchoolData();
};

async function fetchSchoolData() {
    const response = await fetch(
        "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
    );
    const data = await response.json();

    const table = document.getElementById("school-data");
    data.forEach((row) => {
        const tr = document.createElement("tr");
        row.forEach((cell) => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}
