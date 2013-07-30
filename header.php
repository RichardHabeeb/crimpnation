<?php

require 'database.php';

$database = new Database();


echo "

<!DOCTYPE html>
<html lang='en'>
	<head>
		<meta name='viewport' content='width=device-width, initial-scale=1.0'>
		<link rel='stylesheet' type='text/css' href='css/bootstrap.min.css' />
		<link href='http://fonts.googleapis.com/css?family=Geo' rel='stylesheet' type='text/css'>
		<link rel='stylesheet' type='text/css' href='css/theme.css' />
		
		<title>
			CrimpNation &middot; QuakeCon  
		</title>
	</head>
	<body>
		<div class='container'>
			<div class='header'>
				<span class='title'>CrimpNation</span>
				QuakeCon Volunteering Statistics
			</div>
			
			<div class='col-12 col-sm-12 col-lg-12'>
				<div class='col-2 col-sm-2 col-lg-2'></div>
				<div class='col-8 col-sm-8 col-lg-8'>
					<button id='crimp_btn' type='button' class='btn btn-success btn-large btn-block'>Start Crimp</button>
					<div class='timer-display center'>
						<p class='text-muted'>Elapsed time of this crimp</p>
						<h1>99:99</h2>
					</div>
				</div>
				<div class='col-2 col-sm-2 col-lg-2'></div>
			</div>
			<div class='col-12 col-sm-12 col-lg-12'>
				<div class='col-1 col-sm-1 col-lg-1'></div>
				<div class='col-10 col-sm-10 col-lg-10'>
";




/*EOF*/