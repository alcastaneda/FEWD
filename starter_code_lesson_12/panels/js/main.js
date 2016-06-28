$('article').hide();
$('#home').show();

$('li').on('click', function() {
  $('article').hide();
   var id = $(this).text().toLowerCase();
   id = "#"+id;
   $(id).show();
});
