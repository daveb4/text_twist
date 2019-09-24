
<?php

$myrack = $_POST['myrack'];
$racks = [];
for($i = 0; $i < pow(2, strlen($myrack)); $i++){
	$ans = "";
	for($j = 0; $j < strlen($myrack); $j++){
		//if the jth digit of i is 1 then include letter
		if (($i >> $j) % 2) {
		  $ans .= $myrack[$j];
		}
	}
	if (strlen($ans) > 1){
  	    $racks[] = $ans;	
	}
}
$racks = array_unique($racks);
/*
$dbhandle = new PDO("sqlite:scrabble.sqlite") or die("Failed to open DB");
    if (!$dbhandle) die ($error);
foreach ($racks as $r){
    $query = "select * from racks where field like " + $r;
    $statement = $dbhandle->prepare($query);
    $statement 
}
*/
//echo $racks;
echo json_encode($racks);
?>
