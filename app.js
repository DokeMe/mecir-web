//blob-pozadi
const blob = document.getElementById("blob");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


//logo animace
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function startAnimation() {
  const h1 = document.querySelector("h1");
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    h1.innerText = h1.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return h1.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= h1.dataset.value.length) {
      clearInterval(interval);
      setTimeout(startAnimation, 5000);
    }

    iteration += 1 / 3;
  }, 30);
}
startAnimation();