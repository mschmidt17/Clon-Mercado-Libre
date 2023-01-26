import React, {useEffect, useState} from 'react';
import { questions } from '../redux/actions.js';
import { useDispatch, useSelector } from "react-redux";


function Question({id}) {
  const dispatch = useDispatch()
  const pregunta = useSelector((state) => state.questions)


  useEffect(() => {
    dispatch(questions(id))
  }, [])

  return (
    <div className='container-question'>
      {pregunta?.map((q) => {
        return(
          <div>
            <h3> {q.text} </h3>
            <p> {q.answer.text} </p>
          </div>
        )
      })
      }
    </div>
  );
}

export default Question;