<?php
include '../inc/database.php';

if(isset($_GET['datas'])){
  $prepare = $db->prepare('SELECT * FROM cannes WHERE year = :year');
  $prepare->bindValue('year',$_GET['datas'] );
  $execute = $prepare->execute();
  $datas = $prepare->fetchAll();
  echo json_encode($datas);
} else {
  echo "Error";
}

// include 'database.php';
//
// if(isset($_POST['year'])){
//
// } else {
//
// }
