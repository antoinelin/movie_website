<?php
function debug($variable){
  echo '<pre>'.print_r($variable, true). '</pre>'
}
function log(){
if(!isset($_SESSION['auth'])){
  $_SESSION['flash']['danger'] = "Vous n'avez pas le droit d'accéder à cette page";
  }
}
