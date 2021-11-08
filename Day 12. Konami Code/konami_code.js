const pressed = [];
const secretCode = 'engifrost';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // check the length
  if (pressed.join('') === secretCode) {
    alert('Nice cock!');
  }
});
