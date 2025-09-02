export const myAction=(data)=>{
    return{
        type:"Add",
        data
    }
}
export const delAction=(data)=>{
    return{
        type:"del",
        data
    }
}
export const edtAction=(i,newValue)=>{
    return{
        type:"edt",
        data:{i,newValue}
    }
}