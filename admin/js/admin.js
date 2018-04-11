function init() {
	$.post(
		"core.php", {
			"action" : "init"
		}, showGoods);
};
function showGoods(data) {
	var jdata = JSON.parse(data);
	//console.log('==========================================================');
	console.log(jdata);
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
			//$('#gid').(jdata.id);

		});
	
};


$(document).ready( function () {
	init();
})