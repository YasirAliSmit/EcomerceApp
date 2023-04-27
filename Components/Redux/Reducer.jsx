import Type from "./Type"
const init_state = {
    num:0
}
export function counterReducer (state=init_state,action) {
 switch(action.type){
    case Type.INCREMENT:
        let data = action.payload 
        return {...state , num : data + 1 }
        case Type.DECREMENT:
        let datas = action.payload 
        return {...state , num : datas - 1 }
    default :
    break ;
 }
}