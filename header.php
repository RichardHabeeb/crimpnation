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
				<div class='col-3 col-sm-3 col-lg-3'></div>
				<div class='col-6 col-sm-6 col-lg-6'>
					<button id='crimp_btn' type='button' class='btn btn-success btn-large btn-block'>Start Crimp</button>
				</div>
				<div class='col-3 col-sm-3 col-lg-3'></div>
			</div>
			

";



print_r($database->get_user_info("Squiggle"));
print_r($database->get_user_crimps("Squiggle"));
print_r($database->get_user_day_crimps("Squiggle", "2013-7-29"));





/*EOF*/