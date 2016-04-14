<?php

define('DB_HOST','localhost'); //your server
define('DB_NAME','budget_view'); //your db
define('DB_USER','root');
define('DB_PASS','root'); // '' default on windows

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

// //not sure why but it works
// session_start();
