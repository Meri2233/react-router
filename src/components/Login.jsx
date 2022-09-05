import {useNavigate} from "react-router-dom"

function Login(props){
    let goTo = useNavigate();
    return(
        <div className="login">
            <button onClick={()=>{
                props.setIsLoggedIn(true)
                goTo("/");
            }}>
                Login
            </button>
        </div>
    )
}

export default Login;