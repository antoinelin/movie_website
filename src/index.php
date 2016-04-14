<?php

<<<<<<< HEAD
// Config
include 'inc/options.php';
include 'inc/config.php'; // Uncomment if you need database
=======
	// Config
	 include 'php/config/database.php';
	 include 'php/config/options.php';
>>>>>>> master

// Get the query
$q = empty($_GET['q']) ? '' : $_GET['q'];

<<<<<<< HEAD
// Routes
if($q == '')
	$page = 'home';
else if($q == 'edition')
	$page = 'edition';
else if($q == 'dates')
	$page = 'dates';
else if($q == 'winners')
	$page = 'winners';
else if($q == 'years')
	$page = 'years';
// else if($q == 'news')
// 	$page = 'news';
// else if(preg_match('/^news\/[-a-z0-9]+$/',$q)) // news/mon-titre-d-actualite
// 	$page = 'news-single';
else
	$page = '404';

// Includes
include 'controllers/'.$page.'.php';
include 'partials/header.php';
include 'pages/'.$page.'.php';
include 'partials/footer.php';
=======

	// Get the query
	$q = empty($_GET['q']) ? '' : $_GET['q'];

	// Routes
	if($q == '')
		$page = 'home';
	else if($q == 'editions' || preg_match('/^editions\/[0-9]+$/',$q))
		$page = 'editions';
	else if($q == 'dates')
		$page = 'dates';
	else if($q == 'retrospective')
		$page = 'retrospective';
	else
		$page = '404';



	include 'php/views/partials/header.php';

  // include 'php/views/pages/years.php';
  include 'php/views/pages/winners.php';

  include 'php/views/partials/footer.php';
>>>>>>> master
