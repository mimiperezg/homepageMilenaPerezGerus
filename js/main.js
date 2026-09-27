function MainModule() {
  const me = {};

  const clockElement = document.querySelector(".site-clock");

  function redrawClock() {
    const now = new Date();
    // get date and time for Boston
    const date = now.toLocaleDateString("en-US", {
      timeZone: "America/New_York",
    });
    const time = now.toLocaleTimeString("en-US", {
      hourCycle: "h23",
      timeZone: "America/New_York",
    });
    // write it to the element
    clockElement.textContent = `${date} ${time} Boston`;
  }

  function startClock() {
    redrawClock();
    // redraw every second
    setInterval(redrawClock, 1000);
  }

  function startGallery() {
    const buttons = document.querySelectorAll(".gallery-button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const caption = button.querySelector(".photo-caption");
        caption.hidden = !caption.hidden;
      });
    });
  }

  me.startClock = startClock;
  me.startGallery = startGallery;

  return me;
}

const main = MainModule();
main.startClock();
main.startGallery();
