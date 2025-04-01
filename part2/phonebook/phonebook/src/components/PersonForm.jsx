
const PersonForm = ({h0, i1, h1, i2, h2}) => {
    return(
      <form onSubmit={h0} >
          <div>
            name : <input value={i1} onChange={h1} />
          </div>
          <div>
            number : <input value={i2} onChange={h2} />
          </div>
          <div>
            <button type = 'submit' >add</button>
          </div>
        </form>
    )
  }

export default PersonForm