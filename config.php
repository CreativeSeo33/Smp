<?php 
$host = $_SERVER['HTTP_HOST'];
$self = explode("/", $_SERVER['PHP_SELF']);
define('HTTP_SERVER', 'http://'.$host.'/');
?>