$(document).ready(function() {
    //console.log('========HZITEM.JS===========');

        //$('.add-to-cart').on('click', addToCart);
});

function incQnt() {
    //increase item qnt
    var id = $(this).attr('data-id');
      //console.log(id);
    var qnt = $('.qnt_input#'+id).text();
    //console.log(qnt);
    qnt++;
    $('.qnt_input#'+id).text(qnt);
    
};

function decQnt() {
 
    //increase item qnt
    var id = $(this).attr('data-id');
      //console.log(id);
    var qnt = $('.qnt_input#'+id).text();
    //console.log(qnt);
    if (qnt>1) {
            qnt--;
            $('.qnt_input#'+id).text(qnt);
        }
    };
    


