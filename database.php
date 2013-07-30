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
		$this->stmt = $this->db->prepare("select * from `users` where handle = ? limit 0, 1");
		$this->stmt->bind_param("s", $handle);
		$this->stmt->execute();
		$this->res = $this->stmt->get_result();
		return $this->res->fetch_assoc();
	}

	
	
	function get_user_crimps($handle) {
		$this->stmt = $this->db->prepare("select * from `crimps` where handle = ?");
		$this->stmt->bind_param("s", $handle);
		$this->stmt->execute();
		$this->res = $this->stmt->get_result();
		$return_data[] = array();
		while($row = $this->res->fetch_assoc()) {
			array_push($return_data, $row);
		}
		return $return_data;
	}
	
	function get_user_crimps_number($handle) {

	}
	
	function get_user_day_crimps($handle, $datestring) {
		
		
	}
	
	
}


/*EOF*/