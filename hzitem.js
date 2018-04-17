$(document).ready(function() {
    //console.log('========HZITEM.JS===========');

        //$('.add-to-cart').on('click', addToCart);
});

function incQnt() {
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
      console.log(id);
    var qnt = $('.qnt_input[id$=id]').val();
    qnt++;
    console.log(qnt);
};

function decQnt() {
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    if (cart[id] < 1) {
        delete cart[id];
        saveCart();
        showCart();
    } else {
        cart[id]--;
        saveCart();
        showCart();
    }

};
