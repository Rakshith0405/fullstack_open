
const Filter = ({searchName, handler}) => {
    return (
      <div>
          filter shown with : <input value={searchName} onChange={handler}/>
      </div>
    )
  }


export default Filter