$('.accordion').on('click','.accord-control', function(e){
  e.preventDefault();
  $(this)
    .next('.accordion-panel')
    .not(':animated')
    .slideToggle();
});
