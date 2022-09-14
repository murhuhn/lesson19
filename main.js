const input = document.getElementById("input");
const typedText= document.getElementById("text");

function debounce( callback, delay ) {
  let timeout;
  return function() {
      clearTimeout( timeout );
      timeout = setTimeout( callback, delay );
  };
};

const text = function () {
  typedText.textContent = input.value;
};

input.addEventListener("keyup", debounce(text, 300));