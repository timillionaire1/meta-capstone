import React,{useReducer} from 'react';
import './Form.css';

function reducer(state, action){
  switch (action.type){
    case 'updateTimes':{
      availableTimes=[fetchAPI(action.timer)]
    }
  }
}

const initialState = ()=>{
  const availableTimes=[fetchAPI(new Date())]
  let num =[]
  for(let i=0; i<availableTimes.length; i++){
    return num.push(availableTimes[i]);
  }
}
function Form({handleSubmit}) {
  const [state, dispatch]=useReducer(reducer, initialState());

  const updateTimes= (e) =>{
    dispatch({type:'update',
  timer:e.target.value})
  }

  return (
    <div>
        <form style={{display: 'grid', maxWidth:'200px', gap:'20px'}} onSubmit={handleSubmit} >
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={updateTimes} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time">
                <option value='17:00' onClick={() =>dispatch({type:'firstTime'})}>num[1]</option>
                <option value='18:00' onClick={() =>dispatch({type:'secondTime'})}>num[2]</option>
                <option value='19:00' onClick={() =>dispatch({type:'threeTime'})}>num[3]</option>
                <option value='20:00' onClick={() =>dispatch({type:'fourTime'})}>num[4]</option>
                <option value='21:00' onClick={() =>dispatch({type:'fiveTime'})}>num[5]</option>
                <option value='22:00' onClick={() =>dispatch({type:'sixTime'})}>num[6]</option>
                <option value='23:00' onClick={() =>dispatch({type:'sevenTime'})}>num[7]</option>
                <option value='24:00' onClick={() =>dispatch({type:'eightTime'})}>num[8]</option>
                <option value='25:00' onClick={() =>dispatch({type:'nineTime'})}>num[9]</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" 
            id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Wedding</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    </div>
  )
}

export default Form;