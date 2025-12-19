function LoginStatus({isloggedIn}){
    return(
        <h2>1.{isloggedIn? "Logged":"Guest"}</h2>
    )
};
export default LoginStatus;