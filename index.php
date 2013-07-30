<?php

require_once("header.php");



print_r($database->get_user_info("Squiggle"));
print_r($database->get_user_crimps("Squiggle"));
print_r($database->get_user_day_crimps("Squiggle", "2013-7-29"));

echo "
	
	
";

require_once("footer.php");

/*EOF*/