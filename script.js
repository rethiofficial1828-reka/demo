/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const animatedElements = document.querySelectorAll(
    ".project-card, .skill-card, .timeline-item, .about-text, .about-card, .interest-grid div"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   STAGGER ANIMATIONS
===================================================== */

document.querySelectorAll(".skill-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 80}ms`;

});


document.querySelectorAll(".project-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 80}ms`;

});


document.querySelectorAll(".interest-grid div").forEach((item, index) => {

    item.style.transitionDelay = `${index * 60}ms`;

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   TERMINAL TYPING EFFECT
===================================================== */

const terminalMessage =
    "Building secure systems...";

const terminalElement =
    document.querySelector(".blinking");

let charIndex = 0;

function typeTerminal() {

    if (!terminalElement) return;

    if (charIndex <= terminalMessage.length) {

        terminalElement.textContent =
            terminalMessage.substring(0, charIndex);

        charIndex++;

        setTimeout(typeTerminal, 70);

    } else {

        setTimeout(() => {

            charIndex = 0;

            typeTerminal();

        }, 2500);

    }

}

typeTerminal();


/* =====================================================
   NAVBAR BACKGROUND ON SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,5,5,0.95)";

    } else {

        navbar.style.background =
            "rgba(5,5,5,0.75)";

    }

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.style.color = "#00ff88";

        }

    });

});


/* =====================================================
   PROJECT CARD HOVER EFFECT
===================================================== */

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -4;

        const rotateY =
            ((x / rect.width) - 0.5) * 4;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================================
   SMOOTH BUTTON FEEDBACK
===================================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(.97)";

        setTimeout(() => {

            button.style.transform = "";

        }, 120);

    });

});