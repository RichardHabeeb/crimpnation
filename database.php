<?php 

Class Database {
	private $db;
	private $stmt;
	private $res;
	
	function __construct() {
		
		$this->db = new mysqli("localhost","root","","crimpnation");
		
		if ($this->db->connect_errno) {
		    echo "Failed to connect to MySQL: (" . $this->db->connect_errno . ") " . $this->db->connect_error;
		}
		

	}
	
	
	function get_user_info($handle) {
		$stmt = $this->db->prepare("SELECT * FROM users where handle = ? LIMIT 1");
		$this->stmt->bind_result($handle);
		$this->stmt->execute();
		$this->res = $this->stmt->get_result();
		return $this->res->fetch();
		
	}

	
	
	function get_user_crimps($handle) {
		
		
	}
	
	function get_user_day_crimps($handle, $datestring) {
		
		
	}
	
	
}


/*EOF*/