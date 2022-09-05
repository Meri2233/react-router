import React from 'react'
import { useParams } from 'react-router-dom'
import { getMessageById } from '../messages';


export default function Email() {
  let params = useParams();
  console.log(params);
  let message = getMessageById(params.id.substring(1))
  console.log(message);
  return (
    <div className='email'>
      <h1>{message.subject}</h1>
      <p><b>{message.date.substring(0, 10)}</b></p>
      <p>{message.body}</p>;
    </div>
  )
}
