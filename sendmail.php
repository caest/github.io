<?php 
 if($_SERVER["REQUEST_METHOD"] == "POST"){
 function send_mail($from,$to,$subject,$body){
    $charset = 'utf-8';
    mb_language("ru");
    $headers  = "MIME-Version: 1.0 \r\n" ;
    $headers .= "From: <".$from."> \r\n";
    $headers .= "Reply-To: <".$from."> \r\n";
    $headers .= "Content-Type: text/html; charset=$charset \r\n";
    $subject = '=?'.$charset.'?B?'.base64_encode($subject).'?=';
    mail($to,$subject,$body,$headers);
} 

session_start();    
$name = $_POST["feedback_name"];
$email = $_POST["feedback_email"];
$subject = $_POST["feedback_subject"];
$txt = $_POST["feedback_txt"];
$key = $_POST["feedback_key"];

$error = array();
if (strlen($name) == 0){ $error[] = "Укажите своё имя!"; }
if (!preg_match("/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i",trim($email))){ $error[] = "Укажите корректный email!"; }
if (strlen($subject) == 0){ $error[] = "Укажите тему сообщения!"; }
if (strlen($txt) == 0){ $error[] = "Напишите сообщение!"; }
if ($key != $_SESSION['result_key']){ $error[] = "Не верный код проверки!"; }

if (count($error))
{echo implode('<br>',$error);
}else{unset($_SESSION['result_key']);

$addressok = "caest16@gmail.com";
$sub = "Сообщение с сайта: Age-Dragon.com";
   send_mail( $email, $addressok, $sub, 
   '<p>Автор: '.$name.'<br>E-mail: '.$email.'<br>Тема письма: '.$subject.'<br><br>Текст сообщения:<br>'.$txt.'</p>');     
    echo 'true';}} 
?>