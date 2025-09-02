const arr=[]
export const myReducer=(state=arr,action)=>{
    if (action.type=="Add") {
        state=[
            ...state,action.data
        ]
        
    }
    else if(action.type=="del"){
        const updateList=[...state]
        updateList.splice(action.data,1)
      return updateList
    }
    else if(action.type=="edt"){
        const {i,newValue}=action.data
        const newArr=[...state]
        newArr[i]=newValue
        return newArr

    }
    
    return state

}