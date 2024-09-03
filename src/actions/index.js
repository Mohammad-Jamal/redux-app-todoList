
//? ACTION FOR COUNTER APPLICATION
export const incNum = () => {
  return {
    type: 'increment'
  }
}

export const decNum = () => {
  return {
    type: 'decrement'
  }
}

//? ACTION FOR TODO LIST APPLICATION
export const addTodo = (data) => {
  return {
    type:   'ADD_TODO',
    payload: {
      id:new Date().getTime().toString(),
      data
    }
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const removeTodo = () => {
  return {
    type: 'REMOVE_TODO'
  }
}


