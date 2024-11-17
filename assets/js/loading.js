window.onload = function() {
    // เรียกใช้งานฟังก์ชันเพื่อเริ่มแอนิเมชัน
    animateText();
};

function animateText() {
    // การเลือกข้อความที่ต้องการให้เขียน
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');

    // ตั้งค่าความยาวของเส้นขีดที่ใช้ในการแสดงแอนิเมชันการเขียน
    text1.style.strokeDasharray = "2000";  // ความยาวของข้อความ
    text1.style.strokeDashoffset = "2000"; // ตั้งค่าเริ่มต้นให้เส้นไม่แสดง

    // สร้างแอนิเมชันสำหรับข้อความแรก
    animateTextLine(text1, 0, 5);

    // สร้างแอนิเมชันสำหรับข้อความที่สอง
    setTimeout(() => animateTextLine(text2, 5, 5), 5000); // หน่วงเวลา 5 วินาที

    // สร้างแอนิเมชันสำหรับข้อความที่สาม
    setTimeout(() => animateTextLine(text3, 10, 5), 10000); // หน่วงเวลา 10 วินาที
}

function animateTextLine(element, delay, duration) {
    setTimeout(() => {
        element.style.transition = `stroke-dashoffset ${duration}s ease-in-out`;
        element.style.strokeDashoffset = "0";  // ทำให้เส้นขีดเริ่มหายไป
    }, delay * 1000);  // แปลงหน่วงเวลาเป็นมิลลิวินาที
}
