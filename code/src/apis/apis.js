
import axios from "axios";

import qs from "qs" //格式化post请求参数


const IP = "http://localhost:80"

//acc用户名  pwd密码
//登录
export function GoLogin(acc,pwd){
   return axios.post( IP + "/login.php",qs.stringify({acc,pwd}))
}
//注册
export function GoRegister(acc,pwd){
   return axios.post( IP + "/reg.php",qs.stringify({acc,pwd}))
}
//房产列表
export function GetHouseList(){
   return axios.get( IP + "/gethouselist.php")
}