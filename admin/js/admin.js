function init() {
	$.post(
		"core.php", {
			"action" : "init"
		}, showGoods);
};
function showGoods(data) {
		// console.log(data);
	var jdata = JSON.parse(data);
	// console.log('==========================================================');
	//console.log(jdata);
	var out = '<select>';
	out += '<option data-id="0"> НОВЫЙ ТОВАР </option>';
	for (var id in jdata) {
		out += `<option data-ord="${jdata[id].ord}" data-id="${id}">${jdata[id].name}</option>`;
	}

	out += '</select>';
	$('.goods-out').html(out);
	$('.goods-out select').on('change', selectGoods);


};
function selectGoods() {
	var id = $('.goods-out select option:selected').attr('data-id');
	console.log(id);
	$.post("core.php", {
		"action" : "selectOneGoods",
		"gid" : id },
		function(data) {
			jdata = JSON.parse(data);
			$('#gname').val(jdata.name);
			$('#gcost').val(jdata.cost);
			$('#gdescr').val(jdata.description);
			$('#gimg').val(jdata.img);
			$('#gord').val(jdata.ord);
			$('#gid').val(jdata.id);

		});
	
};

function saveToDb() {
	 var id=$('#gid').val();
	//var id = $('.goods-out select option:selected').attr('data-id');
	if (id !="") {
		$.post("core.php", {
			"action" : "updateGoods",
			"id" : id,
			"gname" : $('#gname').val(),
			"gcost" : $('#gcost').val(),
			"gdescr" : $('#gdescr').val(),
			"gimg" : $('#gimg').val(),
			"gord":$('#gord').val(),
		}, function(data) {
			if (data == 1) {
				alert('update Data saved To Db!');
				init();
			} else {
				console.log(data);
			}
		})
	} else {
				console.log("NEWWW");
				$.post("core.php", {
			"action" : "newGoods",
			"id" : 0,
			"gname" : $('#gname').val(),
			"gcost" : $('#gcost').val(),
			"gdescr" : $('#gdescr').val(),
			"gimg" : $('#gimg').val(),
			"gord":$('#ord').val(),
	}, function(data) {
			if (data == 1) {
				alert('NEWWW Data saved To Db!');
				init();
	}
});
			}
		};



$(document).ready( function () {
	init();
	$('.flex-table .row .add-to-db').on('click', saveToDb);
})