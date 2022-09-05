import { messages } from "../messages"
import { useNavigate } from "react-router-dom"
let email = document.querySelector(".new-email");
let createEmailEl = document.querySelector(".createemail")

function Inbox() {
    let goTo = useNavigate()
    return (
        <div className="inbox">
            <div className="messagesection">
                {messages.map((el) =>
                    <div onClick={() => goTo("/inbox/:" + el.id)} className="msgsection">
                        <p className="name">{el.from.name}</p>
                        <p className="description">{el.subject} <span className="gray">{el.body}</span></p>
                        <p className="date">{el.date.substring(0, 10)}</p>
                    </div>
                )}
            </div>
            <div className='new-email'>
                <div className='cross'>
                    <button onClick={(e) => {
                        email.style.display = "none";
                        createEmailEl.style.display = "block";
                    }}>x</button>
                </div>
                <input type="text" id="email" name="email" className='email' placeholder='Recipients' /><br />
                <input type="text" id="subject" name="subject" className='subject' placeholder='Subject' /><br />
                <input type="text" id="email-body" name="email-body" className='email-body' /><br />
                <button onClick={(e) => {
                    email.style.display = "none";
                    createEmailEl.style.display = "block";
                }} className='send'>Send</button>
            </div>
            <div className="createemail">
                <button onClick={(e) => {
                    email.style.display = "block";
                    createEmailEl.style.display = "none";
                }} className="add">+</button>
            </div>
        </div>
    )
}

export default Inbox