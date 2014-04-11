function equalizeHeights(items) {
  var maxHeight = 0;
  items.each(function() {
    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  });
  items.each(function() { $(this).css('min-height',(maxHeight+10)+"px"); });
}

function formatPostListings() {
  var posts = $('body.page-posts div.posts div.thumbnail');
  posts.each(function(){ $(this).css('min-height',"0px"); });
  if( $(window).width() >= 992 ) {
    for(var i = 0; i < posts.length; i+=3) { equalizeHeights( posts.slice(i, i+3) ); }
  } else if ( $(window).width() >= 768 ) {
    for(var i = 0; i < posts.length; i+=2) { equalizeHeights( posts.slice(i, i+2) ); }
  }
}

$(document).ready(function() {

  $(window).on('load', formatPostListings);
  $(window).on('resize', formatPostListings);

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