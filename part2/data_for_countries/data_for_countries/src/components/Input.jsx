const Input = ({value, inputHandler}) => {
    return(
        <div>
            find countries <input  value={value} onChange={inputHandler} />
        </div>   
    )
}

export default Input