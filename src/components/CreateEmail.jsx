import React from 'react'
let email = document.querySelector(".new-email");

export default function CreateEmail() {
    return (
        <div className='new-email'>
            <div className='cross'>
                <button>x</button>
            </div>
            <input type="text" id="email" name="email" className='email' placeholder='Recipients' /><br />
            <input type="text" id="subject" name="subject" className='subject' placeholder='Subject' /><br />
            <input type="text" id="email-body" name="email-body" className='email-body' /><br />
            <button onClick={(e) => {
                    email.style.display = "none";
                }} className='send'>Send</button>
        </div>
    )
}
