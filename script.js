$(function() {
  $('form').on('submit', function(evt) {
    evt.preventDefault();
    rot13( $('input').val() );
  });

  $('#clear').on('click', function(evt) {
    $('#result').empty();
    $('input').focus();
  });
});


function rot13(string) {
  let array = [];

  // Get the charCode of each character
  for (let i = 0; i < string.length; i++) {
    array.push(string.charCodeAt(i));
  }

  let shifted_string = array.map((code) => {
    // If uppercase letters: [A - Z] = [65 - 90]
    if (code >= 65 && code <= 90) {
      let charCode = code + 13;
      if (charCode <= 90) {
        return String.fromCharCode(charCode);
      } else {
        return String.fromCharCode(charCode - 26);
      }

    // Else if lowercase letter: [a - z] = [97 - 122]
    } else if (code >= 97 && code <= 122) {
      let charCode = code + 13;
      if (charCode <= 122) {
        return String.fromCharCode(charCode);
      } else {
        return String.fromCharCode(charCode - 26);
      }

      // Else just return character
    } else {
      return String.fromCharCode(code);
    }
  }).join('');

  $('#result').append(`<li>${string} = ${shifted_string}</li>`);

  $('input').val('');
}
