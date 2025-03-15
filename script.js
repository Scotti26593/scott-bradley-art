// BRINGING IN THE SLIDING NAVIGATION

const setupMenu = () => {
  const openButton = document.querySelector(".menu-button");
  const heading = document.querySelector(".heading");
  const navigation = document.querySelector(".sliding-navigation");
  const mobileButton = document.querySelector(".mobile-nav-button");
  const mobileCloseButton = document.querySelector(".mobile-nav-close-button");

  const openNAV = function () {
    navigation.classList.add("show-navigation");
  };

  const closeNav = function () {
    navigation.classList.remove("show-navigation");
  };

  if (openButton) {
    openButton.addEventListener("click", () => {
      openNAV();

      openButton.classList.add("hidden");
      heading.classList.add("hidden");
    });
  }

  if (mobileButton) {
    mobileButton.addEventListener("click", () => {
      openNAV();

      mobileCloseButton.classList.add("open");
    });
  }

  if (mobileCloseButton) {
    mobileCloseButton.addEventListener("click", () => {
      closeNav();
    });
  }
};

// SLIDING NAV FOR MOBILE BUTTON ///
// SLIDING NAV FOR MOBILE BUTTON ///
// SLIDING NAV FOR MOBILE BUTTON ///
// SLIDING NAV FOR MOBILE BUTTON ///
// SLIDING NAV FOR MOBILE BUTTON ///

//CAROUSEL SLIDER//
//CAROUSEL SLIDER//
//CAROUSEL SLIDER//
//CAROUSEL SLIDER//

const setupCarousel = () => {
  const carousel = document.querySelector(".carousel-container");

  if (carousel) {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    const closeButton = document.querySelector(".close-button");
    const galleryBody = document.querySelector(".gallery-body");
    const images = document.querySelectorAll(".image");

    const slides = document.querySelectorAll("[data-slides] .slide");
    const photographyBody = document.querySelector(".photography-body");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const isNext = button.classList.contains("next");
        const direction = isNext ? 1 : -1;

        const activeSlide = document.querySelector(
          "[data-slides] .slide[data-active]"
        );
        const slidesArray = [...slides];
        let currentIndex = slidesArray.indexOf(activeSlide);
        let newIndex = currentIndex + direction;

        if (newIndex < 0) newIndex = slidesArray.length - 1;
        if (newIndex >= slidesArray.length) newIndex = 0;

        slidesArray.forEach((slide) => {
          slide.removeAttribute("data-direction");
        });

        if (isNext) {
          slidesArray[newIndex].setAttribute("data-direction", "next");
        } else {
          slidesArray[newIndex].setAttribute("data-direction", "prev");
        }

        activeSlide.removeAttribute("data-active");

        slidesArray[newIndex].setAttribute("data-active", "true");

        setTimeout(() => {
          slidesArray[newIndex].removeAttribute("data-direction");
        }, 1500);
      });
    });

    //OPEN CAROUSLE//
    //OPEN CAROUSLE//
    //OPEN CAROUSLE//
    //OPEN CAROUSLE//

    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        {
          slides.forEach((slide) => {
            slide.removeAttribute("data-active");
          });

          slides[index].setAttribute("data-active", "true");

          carousel.classList.add("carousel-open");

          carousel.classList.remove("hidden");
          document.documentElement.classList.add("no-scroll");
        }
      });
    });

    //CLOSE CAROUSEL//
    //CLOSE CAROUSEL//
    //CLOSE CAROUSEL//
    //CLOSE CAROUSEL//

    closeButton.addEventListener("click", () => {
      {
        carousel.classList.add("hidden");
        carousel.classList.remove("carousel-open");
        document.documentElement.classList.remove("no-scroll");
      }

      // Clean up any animation states
      slides.forEach((slide) => {
        slide.removeAttribute("data-active");
        slide.removeAttribute("data-prev");
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setupCarousel();
  setupMenu();
});

//SKETCH IMAGES //
//SKETCH IMAGES //
//SKETCH IMAGES //
//SKETCH IMAGES //
//SKETCH IMAGES //
//SKETCH IMAGES //
//SKETCH IMAGES //
//SKETCH IMAGES //

const container = document.querySelector(".sketch-container");
const photos = container.querySelectorAll(".photo");

photos.forEach((photo) => {
  photo.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    photos.forEach((otherPhoto) => {
      if (otherPhoto !== photo) {
        otherPhoto.classList.remove("pop");
        otherPhoto.classList.remove("no-rotate");
      }
    });
    if (photo) {
      photo.classList.toggle("no-rotate");
      photo.classList.toggle("pop");
    }
  });
});

// Add click event to document
document.addEventListener("click", () => {
  // Remove classes from all photos when clicking outside
  photos.forEach((photo) => {
    photo.classList.remove("no-rotate");
    photo.classList.remove("pop");
  });
});
