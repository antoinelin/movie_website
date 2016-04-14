<?php

	// Config
	 include 'php/config/database.php';
	 include 'php/config/options.php';

	// Includes


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
