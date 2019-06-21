<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";
	

	$sql = "select * from transaksi";
	$query = mysqli_query($koneksi, $sql);

	$arrTransaksi = array();
	while ($row = mysqli_fetch_array($query)){
		$arrTransaksi[] = $row;
	}
	echo json_encode($arrTransaksi );
	mysqli_close($koneksi);
 ?>