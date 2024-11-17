// script.js
const canvas = document.getElementById("loadingCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 200;

const messages = [
    "โรงเรียนกงลี้จงซัน",
    "Kongleechongsun School",
    "公立中山学校"
];

let currentMessage = 0;
let writing = true;
let charIndex = 0;

function drawLoadingText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "24px 'Noto Sans Thai', sans-serif";
    ctx.fillStyle = "#000";
    ctx.fillText(messages[currentMessage].slice(0, charIndex), 20, 100);

    if (writing) {
        charIndex++;
        if (charIndex > messages[currentMessage].length) {
            writing = false;
            setTimeout(() => {
                writing = false;
            }, 500);
        }
    } else {
        charIndex--;
        if (charIndex === 0) {
            currentMessage = (currentMessage + 1) % messages.length;
            writing = true;
        }
    }
}

const interval = setInterval(drawLoadingText, 100);

window.onload = async () => {
    // ดึงข้อมูลจาก Google Apps Script
    await fetchSchoolData();

    // เมื่อโหลดเสร็จ
    clearInterval(interval);
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
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
