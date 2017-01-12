var section = $('.section');
var totalSections = $('.section').length;
totalSections = totalSections.toString();
var counter = 0;
$(section).each(function() {
  var idHolder;
  if (counter <= totalSections) {
    idHolder = 'section-';
    idHolder += counter.toString();
    $(this).addClass(idHolder);
    counter++;
  }
});
