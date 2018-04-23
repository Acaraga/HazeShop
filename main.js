$(document).ready(function() {
    //var jdata = {};
    init();
    loadCart();
});


function init() {
    // var jdata = {
    //     "123001": {
    //         "name": "HAZE Legend - дедОК",
    //         "conc1": 3,
    //         "vol1": 30,
    //         "cost1": 190,
    //         "conc2": 6,
    //         "vol2": 130,
    //         "cost2": 490,
    //         "order": 1,
    //         "img": "dedok.png",
    //         "info": "<p>Премиум жидкость для электронных сигарет от одного из самых известных и уважаемых парильщиков России (дедОК). </p><p>Легендарный рецепт, идеальный баланс и ни с чем не сравнимый, запоминающийся вкус в ярком табачном исполнении. </p>				<p>Жидкость, завоевавшая симпатии тысяч потребителей по всей России и по праву называющаяся народной.</p>				<p>PG/VG - авторский*</p><p>1. Крепость менее 6мг технически не возможна</p><p>2. Крепость выше 6мг возможна, но делаете самостоятельно.</p>"
    //     },
    //     "123002": {
    //         "name": "HAZE Legend - дедОК2",
    //         "conc1": 3,
    //         "vol1": 30,
    //         "cost1": 170,
    //         "conc2": 6,
    //         "vol2": 130,
    //         "cost2": 499,
    //         "order": 1,
    //         "img": "dedok.png",
    //         "info": "<p>Премиум жидкость для электронных сигарет от одного из самых известных и уважаемых парильщиков России (дедОК). </p><p>Легендарный рецепт, идеальный баланс и ни с чем не сравнимый, запоминающийся вкус в ярком табачном исполнении. </p>				<p>Жидкость, завоевавшая симпатии тысяч потребителей по всей России и по праву называющаяся народной.</p>				<p>PG/VG - авторский*</p><p>1. Крепость менее 6мг технически не возможна</p><p>2. Крепость выше 6мг возможна, но делаете самостоятельно.</p>"
    //     },
    //     "123003": {
    //         "name": "HAZE Legend - дедОК3",
    //         "conc1": 3,
    //         "vol1": 30,
    //         "cost1": 198,
    //         "conc2": 6,
    //         "vol2": 130,
    //         "cost2": 498,
    //         "order": 1,
    //         "img": "dedok.png",
    //         "info": "<p>Премиум жидкость для электронных сигарет от одного из самых известных и уважаемых парильщиков России (дедОК). </p><p>Легендарный рецепт, идеальный баланс и ни с чем не сравнимый, запоминающийся вкус в ярком табачном исполнении. </p>				<p>Жидкость, завоевавшая симпатии тысяч потребителей по всей России и по праву называющаяся народной.</p>				<p>PG/VG - авторский*</p><p>1. Крепость менее 6мг технически не возможна</p><p>2. Крепость выше 6мг возможна, но делаете самостоятельно.</p>"
    //     },

    // };
    //$.getJSON("goods.json", goodsOut);
    // saveJData(jdata);
    // goodsOut(jdata);
    $.post("admin/core.php", {
    	"action" : "loadGoods"
    }, goodsOut);
};

function goodsOut(data) {
	data = JSON.parse(data);
    console.log('================================');
    console.log(data);
    var out = '';
    for (var key in data) {
        out += '<div class="haze_item">	<!-- ====================HZ_ITEM========================== -->'
        out += '		<div class="red_border">'
        out += `			<div class="item_pic"><a href="#"><div class="rotate_text">${data[key].name}</div>`
        out += `		<img src="img/${data[key].img}" alt=""></a></div>`
        out += `		<div class="item_info">${data[key].description}</div>`
        out += '	<div class="item_form">'
        out += '		<div class="row">'
        out += `			<h2>${data[key].name}</h2>`
        out += '		</div>'
        out += '		<div class="row">'
        out += '			<div class="left-wr">'
        out += '				<p>Крепость:</p>'
        out += `				<div class="vol-gray"></div> <div class="vol-white concentration"><select class="red-select" data-id="${data[key].id}"><option>${data[key].conc0} МГ.</option><option>${data[key].conc1} МГ.</option><option>${data[key].conc2} МГ.</option></select></div>`
        out += '			</div>'
        out += '			<div class="mid-wr">'
        out += '				<p>Объем:</p>'
        out += `				<div class="vol-gray"></div> <div class="vol-white volume"><select class="red-select" data-id="${data[key].id}"><option>${data[key].vol0} мл</option><option>${data[key].vol1} мл</option></select></div>`
        out += '			</div>'
        out += '			<div class="right-wr"><p>Цена:</p>'
        out += `			<div class="price-black"></div> <div class="price-red"></div>`
        out += `			<div class="price-black" data-id="${data[key].id}"></div> <div class="price-red" data-id="${data[key].id}">${data[key].cost0} P.</div>`
        out += '		</div>'
        out += '	</div>'
        out += '	<div class="end-wr">'
        out += `		Кол-во: <div class="dec_btn" data-id="${data[key].id}">-</div>`
        out += `		<div class="qnt_input" id="${data[key].id}">1</div>`
        out += `		<div class="inc_btn" data-id="${data[key].id}">+</div>`
        out += `		<div class="add-to-cart" data-id="${key}"><img src="img/hz-cart.png" alt="${data[key].name}"></div>`
        out += '	</div>'
        out += '</div>'
        out += '</div>'
        out += '</div> 				<!-- ====================HZ_ITEM========================== -->'
    };
    $('.main_classic').html(out);
    $('.add-to-cart').on('click', addToCart);
    $('.dec_btn').on('click', decQnt);
    $('.inc_btn').on('click', incQnt);
    $('.concentration > select.red-select').on('change', concChange);
    $('.volume > select.red-select').on('change', volChange);
    saveJData(data);
};



var cart = {};
var volArr = {};
var conc = {};

function addToCart() {
    //event.preventDefault();
    var id = $(this).attr('data-id');
    var qnt = $('.qnt_input#'+id).text()
    //var
    var conc = ($('.vol-white.concentration>select.red-select[data-id='+id+']').prop('selectedIndex'));
    var v = ($('.vol-white.volume>select.red-select[data-id='+id+']').prop('selectedIndex'));
    // ================================
    // cv_id -> 2 1 001
    // where 2 - concentration, 1 - volume, 001 - id from goods table
    // ================================
    var cv_id = (conc*10000) + (v*1000) + parseInt(id);
    console.log("cv_id: " + cv_id);

    if (cart[cv_id] == undefined) {
        cart[cv_id] = parseFloat(qnt);

    } else {
        cart[cv_id] += parseFloat(qnt);

    }
    //console.log(volArr);
    showMiniCart();
    saveCart();
    //return true;
};

function showMiniCart() {
    var out = "";
    var count = 0;
    var summ = 0;
    for (var key in cart) {
        count += 1;
        //summ += data[key].cost1;
    }
    out = `<p>В корзине ${count} поз.</p> <p>Сумма: ${getTotalSumm()} Р.`;
    $('.cart_wrap').html(out);
    $('.cart_wrap').on('click', function() {
        console.log(cart);
    });
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
};

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
};
function saveJData(jdata) {
    localStorage.setItem('jdata', JSON.stringify(jdata));
};

function loadJData(key) {
    if (localStorage.getItem(key)) {
        keydata = JSON.parse(localStorage.getItem(key));
        return keydata;
    }
};
function getTotalSumm (object) {
    // if (localStorage.getItem('cart')) {
    // 	cart = localStorage.getItem('cart');
    	loadJData();
        var totalSumm = 0;
        var goods = loadJData('jdata');
        for (var cv_id in cart) {
                var id = parseInt(cv_id % 1000);
                var c = parseInt((cv_id / 10000));
                var v = parseInt((cv_id % 10000 / 1000)) ;
                switch (v) {
                    case 0: 
                        totalSumm += cart[cv_id] * goods[id].cost0;
                        break;
                    case 1: 
                        totalSumm += cart[cv_id] * goods[id].cost1;
                        break;
                    }
                
            }
            //totalSumm = -1;
        
        return totalSumm;
}
function concChange() {
	 var id = $(this).attr('data-id');
     var conc = ($('.vol-white.concentration>select.red-select[data-id='+id+']').prop('selectedIndex'));
	console.log('conc='+conc);
}
function volChange() {
	// Выбор объема жидкости и изм. цены на форме
	var id = $(this).attr('data-id');
	var v = ($('.vol-white.volume>select.red-select[data-id='+id+']').prop('selectedIndex'));
	var cost = 0;
    var goods = loadJData('jdata');
    switch (v) {
    case 0: 
        var cost = goods[id].cost0;
        break;
    case 1: 
        var cost = goods[id].cost1;
        break;
    }
    $('.price-red[data-id='+id+']').text(cost +' Р.');
}
