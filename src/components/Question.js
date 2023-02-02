import React, {useEffect, useState} from 'react';
import { questions } from '../redux/actions.js';
import { useDispatch, useSelector } from "react-redux";
import "./CSS/question.css"


function Question({id}) {
  const dispatch = useDispatch()
  const pregunta = useSelector((state) => state.questions)


  useEffect(() => {
    dispatch(questions(id))
  }, [])

  return (
    <div className='container-question'>
        <h2 className='question-title'> Preguntas y respuestas </h2>

        <p className="question-p"> ¿Qué querés saber? </p>
        <ul className='question-ul'>
          <li>Costo y tiempo de envio</li>
          <li>Devoluciones gratis</li>
          <li>Medios de pagos y promociones</li>
          <li>Garantía</li>
          <li>Cuotas sin tarjeta</li> 
        </ul>

      <p className='question-p'> Preguntale al vendedor </p> 
      <div className='container-btn'>
        <input
          className="question-input"
          type="text"
          placeholder="Escribi tu pregunta..."
        />
        <button className="btn-question" type="button">Preguntar</button>
      </div>

      <p className='question-p'>Últimas realizadas</p>
      <div>
        {pregunta?.map((q) => {
          return(
            <div className='question-text' key={q.id}>
              <h3 className='question-next'> {q.text == null ? "" : q.text } </h3>
              <div className='answer-container'>
                <div className='rotate-icon'>¬</div>
                <p className='question-answer'> {q.answer == null ? "" : q.answer.text} </p>
              </div>
            </div>
          )
        })
        }
        <p className='question-last'>Ver todas las preguntas</p>
      </div>
    </div>
  );
}

export default Question;