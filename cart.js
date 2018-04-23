$(document).ready(function() {
    console.log('===================');
    var jdata = loadJData('jdata');
    console.log(jdata);
    loadCart();
    $('.send-email').on('click', sendEmail);
});
var cart = {};

function loadCart() {
    //проверяю есть ли в localStorage запись cart
    console.log('loadcart');
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    } else {
        $('.main-cart').html('Корзина пуста!');
    }
}

function getTotalSumm() {
    if (localStorage.getItem('cart')) {
        var totalSumm = 0;
        var goods = loadJData('jdata');
        for (var id in cart) {
                totalSumm += cart[id] * goods[id].cost1;
            }
            //totalSumm = -1;
        }
        return totalSumm;
}

function showCart() {
    //вывод корзины
    console.log('Showcart');
    if (!isEmpty(cart)) {
        $('.main-cart').html('Корзина пуста!');
    } else {
        //$.getJSON('goods.json', function (data) {
     //======================================= FORMING TABLE OF CART ITEMS ==================
        var goods = loadJData('jdata');
        var totalSumm = 0;
        var totalSumm2 = 0;
        console.log(goods);
        var out = '';
        var out2 = '';
        for (var cv_id in cart) {
            
            var id = parseInt(cv_id % 1000);
            var c = parseInt((cv_id / 10000));
            var v = parseInt((cv_id % 10000 / 1000)) ;
            out2 += '<div class="row">';
            out2 += `<div class="col"><img src="img/${goods[id].img}"></div>`;
            out2 += `<div class="col"><p>${goods[id].name  }</p></div>`;
            out2 += `<div class="col"><p>${getConcByCvid(cv_id)} мг.</p></div>`;
            out2 += `<div class="col"><p>${getVolByCvid(cv_id)} мл.</p></div>`;
            switch (v) {
                case 0: 
                    out2 += `<div class="col"><p>${goods[id].cost0}</p></div>`; 
                    out2 += `<div class="col"><p><button data-id="${cv_id}" class="dec-goods">-</button>${cart[cv_id]}`;
                    out2 += `<button data-id="${cv_id}" class="inc-goods">+</button></p></div>`;
                    out2 += `<div class="col"><p>${(cart[cv_id] * goods[id].cost0)}</p></div>`;
                    totalSumm2 += cart[cv_id] * goods[id].cost0;
                    break;
                case 1: 
                    out2 += `<div class="col"><p>${goods[id].cost1}</p></div>`; 
                    out2 += `<div class="col"><p><button data-id="${cv_id}" class="dec-goods">-</button>${cart[cv_id]}`;
                    out2 += `<button data-id="${cv_id}" class="inc-goods">+</button></p></div>`;
                    out2 += `<div class="col"><p>${(cart[cv_id] * goods[id].cost1)}</p></div>`;
                    totalSumm2 += cart[cv_id] * goods[id].cost1;
                    break;
                }
            
            out2 += `<button data-id="${cv_id}" class="del-goods">x</button>`;
        
            out2 += `</div>` // div "row" ends

            //==================================== OLD CART ==================================
            out += `<button data-id="${cv_id}" class="del-goods">x</button>`;
            out += `<img src="img/${goods[id].img}">`;
            out += ` ${goods[id].name  } : Крепость ~ ${getConcByCvid(cv_id)} мг. : объем  ${getVolByCvid(cv_id)} мл.`;

            out += `<button data-id="${cv_id}" class="dec-goods">-</button> ${cart[cv_id]  }`;
            out += `<button data-id="${cv_id}" class="inc-goods">+</button>`;
            switch (v) {
                case 0: 
                    out += 'Кол-во:' + cart[cv_id] + ' по цене:' + goods[id].cost0 + ' На суммму:' + (cart[cv_id] * goods[id].cost0);
                    out += '<br>'
                    totalSumm += cart[cv_id] * goods[id].cost0;
                    break;
                case 1: 
                    out += 'Кол-во:' + cart[cv_id] + ' по цене:' + goods[id].cost1 + ' На суммму:' + (cart[cv_id] * goods[id].cost1);
                    out += '<br>'
                    totalSumm += cart[cv_id] * goods[id].cost1;
                    break;
                }

        }

        out += '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=- <br>'
            out += 'Всего в корзине на суммму: ' + totalSumm ;
        //console.log( );
        var oout = $('.flex-table').html() + out2;
        $('.flex-table').html(oout);
        $('.main-cart').html(out);
        $('.del-goods').on('click', delGoods);
        $('.dec-goods').on('click', decGoods);
        $('.inc-goods').on('click', incGoods);

        //};
    }
};

function delGoods() {
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
};

function decGoods() {
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

function incGoods() {
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showCart();
};

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
};

function isEmpty(object) {
    //проверка корзины на пустоту
    for (var key in object)
        if (object.hasOwnProperty(key)) return true;
    return false;
}

function saveJData(jdata) {
    localStorage.setItem('jdata', JSON.stringify(jdata));
};

function loadJData(key) {
    if (localStorage.getItem(key)) {
        keydata = JSON.parse(localStorage.getItem(key));
        return keydata;
    }
};

function sendEmail() {
    var ename = $('#ename').val();
    var email = $('#email').val();
    var ephone = $('#ephone').val();
    if (ename != '' && email != '' && ephone != '') {
        if (isEmpty(cart)) {
            $.post(
                "core/mail.php", {
                    "ename": ename,
                    "email": email,
                    "ephone": ephone,
                    "cart": cart
                },
                function(data) {
                    if (data==1) {
                        alert('Заказ отправлен');
                } else {
                        alert('Ошибка при отправке заказа');
                        }; 
                   }     
                )}
        else {
            alert('Корзина пуста');
        }

    } else {
        alert('Заполните все поля!');
    }
}

function getVolByCvid (cv_id) {
    var goods = loadJData('jdata');
    var id = parseInt(cv_id % 1000);
    var v = parseInt((cv_id % 10000 / 1000)) ;
    var volStr ='';
    switch (v) {
                case 0: 
                    volStr = goods[id].vol0;
                    break;
                case 1: 
                    volStr = goods[id].vol1;
                    break;
                case 2: 
                    volStr = goods[id].vol2;
                    break;
                case 3: 
                    volStr = goods[id].vol3;
                    break;
                };

    return volStr;
}

function getConcByCvid (cv_id) {
    var goods = loadJData('jdata');
    var id = parseInt(cv_id % 1000);
    var c = parseInt((cv_id / 10000));
    var concStr ='';
    switch (c) {
                case 0: 
                    concStr = goods[id].conc0;
                    break;
                case 1: 
                    concStr = goods[id].conc1;
                    break;
                case 2: 
                    concStr = goods[id].conc2;
                    break;
                case 3: 
                    concStr = goods[id].conc3;
                    break;
                };

    return concStr;
}