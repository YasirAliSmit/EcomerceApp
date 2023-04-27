import Type from "./Type"
export const Increment = (data) => {
    return{
        type:Type.INCREMENT,
        payload:data
    }
}
export const Decrement = (data) => {
    return{
        type:Type.DECREMENT,
        payload:data
    }
}