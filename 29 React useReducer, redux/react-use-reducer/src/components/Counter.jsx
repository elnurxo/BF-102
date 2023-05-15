import { Button } from '@mui/material'
import React, { useReducer } from 'react'

//reducer counter func
function reducer(state, action) {
    switch(action){
        case 'increment':
            return {
                count: state.count+1
            }
        case 'decrement': 
            return {
                count: state.count-1
            }
        case 'reset':
            return{
                count: state.count=0
            }
        default:
            return {
                count: state.count
            }
    }
}

const Counter = () => {
  //counter use reducer
  const[state, dispatch] = useReducer(reducer,{count:0});
  function handleIncrease(){
    //increase
    dispatch('increment');
  }
  function handleDecrease(){
    if (state.count>0) {
        //decrease
        dispatch('decrement');
    }
  }
  function handleReset(){
    dispatch('reset');
  }
  return (
   <>
   <div style={{display:'flex',justifyContent:'center',marginTop:'50px',alignItems:'center'}}>
    <Button disabled={state.count===0} onClick={handleDecrease} variant='contained' color={`${state.count>0 ? "primary" : "error"}`}>decrease -</Button>
    <span style={{margin:'0px 20px', fontWeight:'bold',fontSize:'22px'}}>{state.count}</span>
    <Button style={{display:'block'}} onClick={handleIncrease} variant='contained' color="primary">increase +</Button>
   </div>
   <Button onClick={handleReset} style={{margin:'20px auto',display:'block'}}  variant='outlined' color='error'>Reset</Button>
   </>
  )
}

export default Counter