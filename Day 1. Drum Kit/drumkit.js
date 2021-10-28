window.addEventListener('keydown', (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!audio) return; // do nothing if key has no sound

  audio.play();
});
