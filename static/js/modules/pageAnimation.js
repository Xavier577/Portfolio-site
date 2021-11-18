const pageAnimation = () => {
  try {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    // scroll reveal animation
    sr.reveal(".home-title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".home-img", { delay: 400 });
    sr.reveal(".home-social-icon", { interval: 200 });

    sr.reveal(".about-img", {});
    sr.reveal(".about-subtitle", { delay: 200 });
    sr.reveal(".about-text", { delay: 400 });

    sr.reveal(".skills-subtitle", {});
    sr.reveal(".skills-text", { delay: 200 });
    sr.reveal(".skills-data", { delay: 400 });
    sr.reveal(".skills-img", { delay: 400 });

    sr.reveal(".work-img", { interval: 200 });

    sr.reveal(".footer-title", { origin: "left", duration: 2000, delay: 500 });
    sr.reveal("#facebook-icon", {
      origin: "left",
      duration: 2200,
      delay: 1000,
    });
    sr.reveal("#whatsapp-icon", {
      origin: "left",
      duration: 2300,
      delay: 2000,
    });
    sr.reveal("#linkedin-icon", {
      origin: "left",
      duration: 2400,
      distance: "90px",
      delay: 3000,
    });
    sr.reveal("#twitter-icon", {
      origin: "left",
      duration: 2500,
      distance: "100px",
      delay: 4000,
    });
  } catch (error) {
    console.error(
      "something went wrong importing the animation library from scroll reveal"
    );
  }
};

export default pageAnimation;
