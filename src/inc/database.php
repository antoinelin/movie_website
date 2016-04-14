<?php

define('DB_HOST','hervelinalin.mysql.db');
define('DB_NAME','hervelinalin');
define('DB_USER','hervelinalin');
define('DB_PASS','KetchupT2');
define('DB_ENC', 'utf-8');

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
