<?php

$target_year = $_GET["year"];

$data = $pdo->query("SELECT * from cannes WHERE year =".$target_year);
$data = $data->fetch();
// echo "<pre>"; print_r($data); echo "<pre>";
