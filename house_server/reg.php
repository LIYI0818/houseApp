<?php
	require_once "./connect.php";
	require_once './cross.php';
	
	/* 
		1. 接收请求参数
		2. 连接数据库，执行sql语句
		3. 拿到返回结果，进行逻辑判断，返回给客户端
	 */
	
	$pwd = $_POST['pwd'];
	$acc = $_POST['acc'];
	
	
	// 执行sql语句
	$data = mysqli_query($conn,"INSERT INTO user(pwd,acc)  VALUES('$pwd','$acc')");
	
	// 判断,并给客户端响应
	if($data){
		echo 'ok';
	}else{
		//注册失败
		echo 'fail';
	}
		
	
?>