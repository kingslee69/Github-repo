let dropdown = false;

function handleDropdown() {
  var element = document.getElementById('dropdown');
  if (dropdown) {
    element.classList.add('disappear');
    console.log('disapper');
    dropdown = false;
  } else {
    element.classList.remove('disappear');
    console.log('appear');
    dropdown = true;
  }
}
