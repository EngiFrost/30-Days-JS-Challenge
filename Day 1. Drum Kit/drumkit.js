window.addEventListener('keydown', (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return; // do nothing if the key has no sound

  audio.currentTime = 0; //rewind the start
  audio.play();

  key.classList.add('playing');
  // setTimeout(() => {
  //   key.classList.remove('playing');
  // }, 100); // it doesn't handle css transition!
});

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});

function removeTransition(event) {
  if (event.propertyName !== 'transform') return; // skip if it is not a transform
  this.classList.remove('playing'); // this equals to key because removeTransition is key's event handler
}