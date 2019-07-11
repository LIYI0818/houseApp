<?php
	// 获取所有借款数据
	// 加载跨域文件
	require_once "./connect.php";
	require_once './cross.php';
	
	/* 
		1. 获取用户数据
		2. 执行sql
		3. 进行逻辑判断，响应
	 */
	
	$data = mysqli_query($conn,"select * from house");	
	$arr = [];
	/* 循环数据，并打印出来 */
	while($row=mysqli_fetch_assoc($data)){
		array_push($arr, $row);
	}
	
	echo json_encode($arr);
?>