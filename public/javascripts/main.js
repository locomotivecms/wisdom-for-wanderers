$(document).ready(function(){

  // if they click on a boxed image, enlarge it
  $('div.img-box a').click(function(event) {
    event.preventDefault();
    var box =
      '<div id="lightbox">' +
      '<p>Click to Close</p>' +
      '<img src="' + $(this).attr('href') + '" alt="Enlarged" />' +
      '</div>';
    $('body').append(box);
  });

  // if they click an enlarged image, close it
  $('body').on('click', '#lightbox',function(event) {
    $('#lightbox').remove();
  });

});