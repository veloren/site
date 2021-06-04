const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
const videos = document.querySelector('video');

function reducedMotionCheck() {
  if (motionQuery.matches) {
    videos.removeAttribute("autoplay")
    videos.pause()
  } else {
    videos.setAttribute("autoplay", "")
  }
}

reducedMotionCheck();

motionQuery.addEventListener("change", reducedMotionCheck);