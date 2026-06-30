"use strict";

/* =========================================
   FLOW MASTER - MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /*==============================
      NAVBAR SCROLL EFFECT
    ==============================*/

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 80) {

                navbar.style.background = "#071320";
                navbar.style.padding = "12px 0";

            } else {

                navbar.style.background = "rgba(7,19,32,.75)";
                navbar.style.padding = "18px 0";

            }

        });

    }

    /*==============================
      BACK TO TOP BUTTON
    ==============================*/

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                topBtn.style.display = "flex";

            } else {

                topBtn.style.display = "none";

            }

        });

        topBtn.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*==============================
      COUNTER
    ==============================*/

    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {

        counters.forEach(counter => {

            const updateCounter = () => {

                const target = Number(counter.getAttribute("data-target"));
                const current = Number(counter.innerText);

                const increment = Math.ceil(target / 100);

                if (current < target) {

                    counter.innerText = current + increment;

                    setTimeout(updateCounter, 20);

                } else {

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

        });

    }

    /*==============================
      AOS
    ==============================*/

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1000,
            once: true,
            offset: 100

        });

    }

});
/*==============================
LOADER
==============================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";

            setTimeout(function () {

                loader.remove();

            }, 500);

        }, 1000);

    }

});

// Animated Counter

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if(current < target){

                counter.innerText = current + increment;

                setTimeout(updateCounter,20);

            }else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter();

            observer.disconnect();

        }

    });

});

const counterSection = document.querySelector(".counter-section");

if(counterSection){

    observer.observe(counterSection);

}