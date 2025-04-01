
const Success = ({message}) =>{
    return(
        <div className="success">
            <h3>{message}</h3>
        </div>
    )
   
}

const Error = ({message}) =>{
    return(
        <div className="error">
            <h3>{message}</h3>
        </div>
    )
}

const Notification = ({message}) =>{
    if(!message || !message.text){
        return null
    }
    return (
         message.type === 'success' ? <Success message={message.text} /> : <Error message={message.text}/>
    )
    
}

export default Notification