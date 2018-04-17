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
function updateGoods() {
	$conn = connect();
	$id = $_POST['id'];
	$name = $_POST['gname'];
	$cost = $_POST['gcost'];
	$descr = $_POST['gdescr'];
	$img = $_POST['gimg'];
	$ord = $_POST['gord'];
	$sql = "UPDATE goods SET name = '$name', cost = '$cost', description = '$descr', img = '$img', ord = '$ord' WHERE id = '$id'";
	if (mysqli_query($conn, $sql)) {
		echo "1";
		//echo('ok: '.mysqli_num_rows ($result)." rows");
		// $row = mysqli_fetch_assoc($result);
		// echo json_encode($row);
	} else {
		echo ("Error :" .mysqli_error($conn));
	}
	mysqli_close($conn);
	writeJSON();
}
function newGoods() {
	$conn = connect();
	$id = $_POST['id'];
	$name = $_POST['gname'];
	$cost = $_POST['gcost'];
	$descr = $_POST['gdescr'];
	$img = $_POST['gimg'];
	$ord = $_POST['gord'];
	$sql = "INSERT INTO goods (name, cost, description, ord, img) VALUES ('$name', '$cost', '$descr', '$ord', '$img')";
	$result = mysqli_query($conn, $sql);
	if (($result)) {
		echo "1";
		//echo('ok: '.mysqli_num_rows ($result)." rows");
		// $row = mysqli_fetch_assoc($result);
		// echo json_encode($row);
	} else {
		echo ("Error :" .mysqli_error($conn));
	}
	mysqli_close($conn);
	writeJSON();
}
function writeJSON() {
	$conn = connect();
	$sql = "SELECT * FROM goods";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows ($result) > 0) {
		//echo('ok: '.mysqli_num_rows ($result)." rows");
		$out = array() ;
		while ($row = mysqli_fetch_assoc($result)) {
			$out[$row["id"]] = $row;
		};
		$a = file_put_contents('../goods.json', json_encode($out));
		echo $a;
	} else {
		echo "0";
	}
	mysqli_close($conn);

}
function loadGoods() {
	$conn = connect();
	$sql = "SELECT * FROM goods";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows ($result) > 0) {
		//echo('ok: '.mysqli_num_rows ($result)." rows");
		$out = array() ;
		while ($row = mysqli_fetch_assoc($result)) {
			$out[$row["id"]] = $row;
		};
		$a = json_encode($out);
		echo $a;
	} else {
		echo "0";
	}
	mysqli_close($conn);

}