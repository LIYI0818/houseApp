<?php
	require_once "./connect.php";
	require_once './cross.php';
	// 1. 获取参数(根据请求方式来)
	$acc = $_POST['acc'];
	$pwd = $_POST['pwd'];
	// 2. 连接数据库
	$data = mysqli_query($conn,"SELECT * FROM user WHERE acc='$acc' && pwd='$pwd'");
	// mysqli_num_rows() 获取返回结果总条数(类似于array.length)
	$length = mysqli_num_rows($data);
	if( $length == 0 ){
		echo 'fail';
	}else{
		echo 'ok';
	}