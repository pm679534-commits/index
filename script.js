const box = document.getElementById('heart-box');
const heartCount = 120; // Ürəklərin sayı

// Ürəkləri yaradan funksiya
for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // Ürəklərin təsadüfi yerləşməsi (ürək forması daxilində)
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Rəng tonları (Qırmızı və çəhrayı)
    const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#c9184a', '#ffb3c1'];
    const size = Math.random() * 15 + 8; // Təsadüfi ölçü
    
    heart.style.left = x + '%';
    heart.style.top = y + '%';
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Gecikmə ilə açılma (Ağac böyüdükdən sonra)
    heart.style.animationDelay = (2 + Math.random() * 2.5) + 's';
    
    box.appendChild(heart);
}

// Zamanı hesablayan funksiya
function updateTime() {
    // DİQQƏT: Aşağıdakı tarixi öz tanışlıq tarixinizlə dəyişdirin!
    // Format: İL, AY (0-dan başlayır: Yanvar=0, Fevral=1...), GÜN
    const startDate = new Date(2024, 1, 14, 0, 0, 0); 
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    // Mətnin formatı
    document.getElementById('clock').innerText = 
        ${days} gün ${hours} saat ${mins} dəqiqə ${secs} saniyə;
}

// Hər saniyə saatı yenilə
setInterval(updateTime, 1000);
updateTime();
