const motionQuery = matchMedia("(prefers-reduced-motion: reduce)");
const videos = Array.from(document.getElementsByTagName("video"));

function reducedMotionCheck() {
  if (motionQuery.matches) {
    videos.forEach(element => {
      element.autoplay = false;
      element.pause();
    });
  } else {
    videos.forEach(element => {
      element.autoplay = true;
      element.play();
    });
  }
}

if (videos !== null) {
  reducedMotionCheck();
  motionQuery.addEventListener("change", reducedMotionCheck);
}