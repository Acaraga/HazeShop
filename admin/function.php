<?php
 function connect()
{
	$conn = mysqli_connect("localhost", "root","","hzshop");
	if (!$conn) {
		die("Connect to db failed " . mysqli_connect_error());
	}
	return $conn;
}
function init() {
	$conn = connect();
	$sql = "SELECT * FROM goods";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows ($result) > 0) {
		//echo('ok: '.mysqli_num_rows ($result)." rows");
		$out = array() ;
		while ($row = mysqli_fetch_assoc($result)) {
			$out[$row["id"]] = $row;
		}
		echo json_encode($out);
	} else {
		echo "0";
	}
	mysqli_close($conn);
}
function selectOneGoods() {
	$conn = connect();
	$id = $_POST['gid'];
	$sql = "SELECT * FROM goods WHERE id = '$id'";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows ($result) > 0) {
		//echo('ok: '.mysqli_num_rows ($result)." rows");
		$row = mysqli_fetch_assoc($result);
		echo json_encode($row);
	} else {
		echo "0";
	}
	mysqli_close($conn);
}