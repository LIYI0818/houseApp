import {createStore,combineReducers} from "redux"


function test(state="测试",action){
   switch(action.type){
       case "changeName" : return "今天天气不错"
       default : return state
   }
}

function houseList(state=[],action){
   switch(action.type){
       case "history" : 
          //优化
          for(let i=0;i<state.length ; i++){
             //如果老数组与新数组 有相同数据则删除掉
             if(state[i].id === action.obj.id){
                   state.splice(i,1);
                   break;
             }
          }
          return [action.obj,...state]
       default : return state
   }
}

let reducers = combineReducers({
    test,
    houseList
})


export default createStore(reducers)
