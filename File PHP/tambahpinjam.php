<?php
	include_once "koneksi.php";
	$data = json_decode(file_get_contents('php://input'), true);
	$kode_pinjam=$data['kode_pinjam'];
	$kode_buku=$data['kode_buku'];
	$buku_judul=$data['buku_judul'];
	$kategori_id=$data['kategori_id'];
    $nama=$data['nama'];
    $nim=$data['nim'];
	$tanggal=$data['tanggal'];

	$sql = "insert into transaksi(kode_pinjam, kode_buku, buku_judul,  kategori_id, nama, nim, tanggal) values('$kode_pinjam', '$kode_buku', '$buku_judul',  '$kategori_id', '$nama', '$nim', '$tanggal')";
	
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