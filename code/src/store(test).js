import {createStore,combineReducers} from "redux"



function name(state="张三",action){
    
    switch(action.type){
        case "changeName" : return "李四"

        default : return state
    }
}
function age(state=18,action){
    
    switch(action.type){
        case "changeAge" : return state + action.num

        default : return state
    }
}
function sex(state="男",action){
    
    switch(action.type){
        

        default : return state
    }
}
//多状态 定义
let reducers = combineReducers({
    name,
    age,
    sex
})
 

//创建store时 ， 会自动发送一次 action  state第一次为undefined action是随机的  
//return 的值 就是改变状态后新的值
const store = createStore(reducers)


//定义action

//执行action
store.dispatch(
  {
    type:"changeName"
  }
);
store.dispatch(
  {
    type:"changeAge",
    num:1
  }
);


//获取新的状态值
console.log(store.getState())


export default store;