
$(document).ready(function () {
    $('.modal_title').slideUp();

    $('.modal__header').click(function (event) { 
        $(this).next().slideToggle()

        $(this).toggleClass('active')
        if($('i').hasClass('fa-solid fa-chevron-down')){
            $('i').replaceWith('<i class="fa-solid fa-chevron-up"></i>');
        }
        else{
            $('i').replaceWith('<i class="fa-solid fa-chevron-down"></i>');
        }
        

   });
   
});