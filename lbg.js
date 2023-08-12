/*
    
    * Project 4: Website Development and Deployment
    * Name: Christma Fontelar
    * Date: 08-01-2023
    * Description: A Sample Website for IT L.B.G. Networking Services and Solutions 

*/
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1; // Start at the first slide
    showSlide(slideIndex);

    function showSlide(n) {
        let slides = document.getElementsByClassName("slideshow-image");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }

    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    document.querySelector(".prev").addEventListener("click", function() {
        changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        changeSlide(1);
    });


    document.querySelector(".slideshow-wrapper").addEventListener("mouseover", function() {
        clearInterval(slideInterval);
    });

    document.querySelector(".slideshow-wrapper").addEventListener("mouseout", function() {
        slideInterval = setInterval(function() { changeSlide(1); }, 3000); // Change slide every 3 seconds (adjust as needed)
    });
    
     const liElements = document.querySelectorAll("li");
     for (let i = 0; i < liElements.length; i++) {
       liElements[i].addEventListener("click", function() {
           this.classList.toggle("active");
       });
    }
});


