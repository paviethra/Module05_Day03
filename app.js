// Initialze the required variable and colors that helps to highlight
var wordsToFind = $('#list li').length,
    colors = ['red', 'green', 'yellow', 'blue', 'purple'],
    found = 0,
    clicking = false;

// Reset Function to reset the page and display the new page
$('#restart').click(function() {
  $('.box').attr('class', 'box');
  $('#list li').removeClass('found');
  $('#restart').hide(); 
  found = 0;
});

// This Function initialize when the user clicks the mouse
$('#grid').mousedown(function(){
    clicking = true;
});

// This function initializes when the user moves the mouse out of the selected area.
$('#grid').mouseup(function(){
  clicking = false;
  $('.box').removeClass('highlight');
})

// 
$('.box').mouseover().mouseout(function() {
  if(clicking){
  // Toggle highlight to box on click
  $(this).toggleClass('highlight');
  
  // Get word attribute from clicked box.
  var word = $(this).attr('data-word'), 

  // To check the length of the word
    wordLen = word.length

// Get all box's with word attribute.
    $box = $('.box[data-word="' + word + '"]'); 

  if ($('.box[data-word="' + word + '"].highlight').length == wordLen) 
  {
    // Word is fully highlighted, remove highlight and add class fount-colorArray
    $box.removeClass('highlight').addClass('found-' + colors[found]);

    // Add found class to the list item that contains "word"
    $('li:contains("' + word + '")').addClass('found');

    // After selecting remove the highlight by using the remove class method
    $('.box').removeClass('highlight');
    found++;
  }
    //Displays the found word in the console
  console.log(found + ' - ' + wordsToFind);

    //If all the words are equal to the found word then call the alert to display the winner text.  
  if (found == wordsToFind) {
    alert('Winner!');
    // The Display the reset button
    $('#restart').show();
  }
  }
});