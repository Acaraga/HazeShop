$(document).ready(function () {
	init();
	//loadCart();
});

function init() {
	var jdata = {
		"123001" : {
		"name": "HAZE Legend - дедОК",
		"conc1":"3 мг",
		"vol1": "30 мл",
		"cost1": "190 Р.",
		"conc2":"6 мг",
		"vol2": "130 мл",
		"cost2": "490 Р.",
		"order": 1,
		"img": "dedok.png",
		"info": "<p>Премиум жидкость для электронных сигарет от одного из самых известных и уважаемых парильщиков России (дедОК). </p><p>Легендарный рецепт, идеальный баланс и ни с чем не сравнимый, запоминающийся вкус в ярком табачном исполнении. </p>				<p>Жидкость, завоевавшая симпатии тысяч потребителей по всей России и по праву называющаяся народной.</p>				<p>PG/VG - авторский*</p><p>1. Крепость менее 6мг технически не возможна</p><p>2. Крепость выше 6мг возможна, но делаете самостоятельно.</p>"
	},
		"123002" : {
		"name": "HAZE Legend - дедОК2",
		"conc1":"3 мг",
		"vol1": "30 мл",
		"cost1": "170 Р.",
		"conc2":"6 мг",
		"vol2": "130 мл",
		"cost2": "499 Р.",
		"order": 1,
		"img": "dedok.png",
		"info": "<p>Премиум жидкость для электронных сигарет от одного из самых известных и уважаемых парильщиков России (дедОК). </p><p>Легендарный рецепт, идеальный баланс и ни с чем не сравнимый, запоминающийся вкус в ярком табачном исполнении. </p>				<p>Жидкость, завоевавшая симпатии тысяч потребителей по всей России и по праву называющаяся народной.</p>				<p>PG/VG - авторский*</p><p>1. Крепость менее 6мг технически не возможна</p><p>2. Крепость выше 6мг возможна, но делаете самостоятельно.</p>"
	},
	"123003" : {
		"name": "HAZE Legend - дедОК3",
		"conc1":"3 мг",
		"vol1": "30 мл",
		"cost1": "198 Р.",
		"conc2":"6 мг",
		"vol2": "130 мл",
		"cost2": "498 Р.",
		"order": 1,
		"img": "dedok.png",
		"info": "<p>Премиум жидкость для электронных сигарет от одного из самых известных и уважаемых парильщиков России (дедОК). </p><p>Легендарный рецепт, идеальный баланс и ни с чем не сравнимый, запоминающийся вкус в ярком табачном исполнении. </p>				<p>Жидкость, завоевавшая симпатии тысяч потребителей по всей России и по праву называющаяся народной.</p>				<p>PG/VG - авторский*</p><p>1. Крепость менее 6мг технически не возможна</p><p>2. Крепость выше 6мг возможна, но делаете самостоятельно.</p>"
	},

};
goodsOut(jdata);
	};

function goodsOut(data) {
	console.log(data);
	var out ='';
	for (var key in data) {
		out +='<div class="haze_item">	<!-- ====================HZ_ITEM========================== -->'
		out +='		<div class="red_border">'
		out +=`			<div class="item_pic"><a href="#"><div class="rotate_text">${data[key].name}</div>`
		out +=`		<img src="img/${data[key].img}" alt=""></a></div>`
		out +=`		<div class="item_info">${data[key].info}</div>`
		out +='	<div class="item_form">'
		out +='		<div class="row">'
		out +=`			<h2>${data[key].name}</h2>`
		out +='		</div>'
		out +='		<div class="row">'
		out +='			<div class="left-wr">'
		out +='				<p>Крепость:</p>'
		out +=`				<div class="vol-gray">${data[key].conc1}</div> <div class="vol-white">${data[key].conc2}</div>`
		out +='			</div>'
		out +='			<div class="mid-wr">'
		out +='				<p>Объем:</p>'
		out +=`				<div class="vol-gray">${data[key].vol1}</div> <div class="vol-white">${data[key].vol2}</div>`
		out +='			</div>'
		out +='			<div class="right-wr"><p>Цена:</p>'
		out +=`			<div class="price-black">250 P.</div> <div class="price-red">${data[key].cost1}</div>`
		out +=`			<div class="price-black">550 P.</div> <div class="price-red">${data[key].cost2}</div>`
		out +='		</div>'
		out +='	</div>'
		out +='	<div class="end-wr">'
		out +='		Кол-во: <div class="dec_btn">-</div>'
		out +='		<div class="qnt_input">1</div>'
		out +='		<div class="inc_btn">+</div>'
		out +='		<img src="img/hz-cart.png" alt="">'
		out +='	</div>'
		out +='</div>'
	out +='</div>'
	out +='</div> 				<!-- ====================HZ_ITEM========================== -->'
	};
	$('.main_classic').html(out);

}
