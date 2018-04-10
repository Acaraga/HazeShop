<?php 
$json = file_get_contents('../goods.json');
$json = json_decode($json, true);


$message = '<p>Телефон: '.$_POST['ephone'].'</p>';
$message = '<p>Почта: '.$_POST['email'].'</p>';
$message = '<p>Клиент: '.$_POST['ename'].'</p>';

$cart = $_POST['cart'];
$sum = 0;

foreach ($cart as $id => $count) {
	$message .= $json[$id]['name'] .' кол-во: (';
	$message .= $count .'), стоимость: ';
	$message .= $count * $json[$id]['cost1'];
	$sum = $sum+$count * $json[$id]['cost1'];
}
$message .= '<br> =-=-=-=-=-=-=-=-=- <br>Всего:' .$sum;

//print_r($message);
// print_r($cart);
// print_r($json);
$to = '7573131@gmail.com'.',';
$to .= $_POST['email'];
$spectext = '<!DOCTYPE html><head><meta charset="UTF-8"><title>Заказ</title></head><body>';
$headers = 'MIME-Version: 1.0'."\r\n";
$headers .= 'Content-type: text/html; charset=utf-8'."\r\n";

$m = mail($to, 'Tema: Заказ в магазине', $spectext.$message.'</body></html>', $headers);

if ($m) {echo 1;} else {echo 0;}