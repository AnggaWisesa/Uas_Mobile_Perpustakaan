<?php
	include_once "koneksi.php";
	$data = json_decode(file_get_contents('php://input'), true);
	$buku_kode=$data['buku_kode'];
	$buku_judul=$data['buku_judul'];
	$penulis=$data['penulis'];
	$penerbit=$data['penerbit'];
    $sinopsis=$data['sinopsis'];
    $kategori_id=$data['kategori_id'];
    $sampul=$data['sampul'];
	

	$sql = "insert into buku(buku_kode, buku_judul, penulis,  penerbit, sinopsis, kategori_id, sampul ) values('$buku_kode', '$buku_judul', '$penulis',  '$penerbit', '$sinopsis', '$kategori_id', '$sampul')";
	
	$info=array();
	$info['sql']=$sql;
	if (mysqli_query($koneksi, $sql)) {
		$info['success'] =1;
		$info['detail'] = 'success';
	} else {
		$info['success'] =0;
		$info['detail'] =mysqli_error($koneksi);
	}

	mysqli_close($koneksi);
	echo json_encode($info);
?>