<?php

define('DB_HOST','localhost');
define('DB_NAME','Cannes-Retrospective');
define('DB_USER','root');
define('DB_PASS','root');

try
{
    // Try to connect to database
    $db = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME,DB_USER,DB_PASS);

    // Set fetch mode to object
	$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);
}
catch (Exception $e)
{
    // Failed to connect
    die('Could not connect');
}
