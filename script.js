/* ==========================================
   YOUR OWN PHOTOGRAPHY v2.0
   script.js
========================================== */

/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const preloader = document.getElementById("preloader");

        if (preloader) {
            preloader.style.display = "none";
        }

    }, 2000);

});


/* ================= HERO BACKGROUND SLIDER ================= */

const hero = document.querySelector(".hero");

const images = [
    "hero.jpg",
    "hero1.jpg",
    "hero2.jpg",
    "hero3.jpg"
];

let currentImage = 0;

function changeHeroBackground() {

    if (!hero) return;

    hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('${images[currentImage]}')`;

    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.style.transition = "background-image 1s ease-in-out";

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

}

changeHeroBackground();

setInterval(changeHeroBackground, 4000);


/* ================= WHATSAPP BOOKING ================= */

function sendBooking() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value;

    if (name === "" || phone === "") {

        alert("Please enter your Name and Phone Number.");

        return;

    }

    const text =
`📸 *New Booking Request*

👤 Name: ${name}

📞 Phone: ${phone}

🎥 Service: ${service}

📅 Date: ${date}

📝 Message:
${message}`;

    window.open(
        "https://wa.me/918340166879?text=" + encodeURIComponent(text),
        "_blank"
    );

}


/* ================= SMOOTH NAVBAR LINKS ================= */

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
/* ================= STICKY NAVBAR ================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.95)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.45)";
    }

});
/* ================= BACK TO TOP ================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});
/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.innerHTML = "✖";
    } else {
        menuToggle.innerHTML = "☰";
    }

});
/* ===== CLOSE MENU AFTER CLICK ===== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function () {

        nav.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});
/* ================= LIGHTBOX ================= */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", function () {

        lightbox.style.display = "flex";
        lightboxImg.src = this.src;

    });

});

closeLightbox.addEventListener("click", function () {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function (e) {

    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }

});
/* ================= SCROLL ANIMATION ================= */

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el)=>{
    observer.observe(el);
});
/* ================= ACTIVE NAVBAR ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
/* ================= ANIMATED COUNTER ================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;
            const speed = target / 100;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;
                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach((counter) => {
    counterObserver.observe(counter);
});
/* ================= TESTIMONIAL AUTO SLIDER ================= */

const testimonialCards = document.querySelectorAll(".testimonial-card");

let currentTestimonial = 0;

function showTestimonial(index){

    testimonialCards.forEach((card)=>{
        card.classList.remove("active");
    });

    testimonialCards[index].classList.add("active");

}

showTestimonial(currentTestimonial);

setInterval(function(){

    currentTestimonial++;

    if(currentTestimonial >= testimonialCards.length){
        currentTestimonial = 0;
    }

    showTestimonial(currentTestimonial);

}, 4000);
/* ================= NAVBAR SCROLL ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});
/* ================= SCROLL PROGRESS BAR ================= */

window.addEventListener("scroll", function(){

    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width = progress + "%";

});
/* ================= SCROLL PROGRESS BAR ================= */

window.addEventListener("scroll", function () {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width = progress + "%";

});
// ================= EMAILJS CONTACT FORM =================

emailjs.init("0qVbt-DHtbEBQRm6h");

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "Yourownphotography2",
        "template_8mca6nl",
        this
    ).then(function () {
        alert("Message Sent Successfully!");
        document.getElementById("contactForm").reset();
    }, function (error) {
        alert("Failed to send message!");
        console.log(error);
    });
});
// ================= EMAILJS =================

emailjs.init("0qVbt-DHtbEBQRm6h");

function sendMail() {

    let params = {
        from_name: document.getElementById("user_name").value,
        from_email: document.getElementById("user_email").value,
        phone: document.getElementById("user_phone").value,
        message: document.getElementById("user_message").value,
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(function () {
        alert("Message Sent Successfully!");
    })
    .catch(function (error) {
        alert("Failed to send message.");
        console.log(error);
    });
}
// EmailJS Init
emailjs.init("YOUR_PUBLIC_KEY");

function sendMail() {

    let params = {
        user_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        user_phone: document.getElementById("user_phone").value,
        user_message: document.getElementById("user_message").value
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(function () {
        alert("Message Sent Successfully!");

        document.getElementById("user_name").value = "";
        document.getElementById("user_email").value = "";
        document.getElementById("user_phone").value = "";
        document.getElementById("user_message").value = "";
    })
    .catch(function (error) {
        alert("Failed to send message.");
        console.log(error);
    });
}
// EmailJS Init
(function () {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

function sendMail() {

    let params = {
        name: document.getElementById("user_name").value,
        email: document.getElementById("user_email").value,
        phone: document.getElementById("user_phone").value,
        message: document.getElementById("user_message").value,
    };

    emailjs.send("Yourownphotography2", "template_8mca6nl", params)
        .then(function () {
            alert("✅ Message Sent Successfully!");

            document.getElementById("user_name").value = "";
            document.getElementById("user_email").value = "";
            document.getElementById("user_phone").value = "";
            document.getElementById("user_message").value = "";
        })
        .catch(function (error) {
            alert("❌ Failed to send message");
            console.log(error);
        });
}
