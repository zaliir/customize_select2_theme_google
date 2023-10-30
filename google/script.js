// Hello world!
$(document).ready(function() {
//fixme: comment the above line and uncomment the bellow line
//jQuery(document).ready(function($) {
   $('.select2-container--google .select2-selection--single .select2-selection__arrow b').replaceWith(function() {
       return '<a href="https://www.sharifsearch.ir" target="_blank"><b role="presentation"></b></a>';
   });

/*
    document.querySelector('.select2-container').addEventListener('click', function() {
        window.location.href = 'https://sharifsearch.ir';
    });
*/
});

