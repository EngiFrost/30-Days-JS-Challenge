const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let lastChecked;

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleClick));

function handleClick(e) {
  let inBetween = false;
  //check 'Shift' is down and boxes are checking
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
