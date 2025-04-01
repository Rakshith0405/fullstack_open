import Person from './Person'
import servicePerson from '../services/persons'


const Persons = ({persons, searchName, setPersons, setErrorMessage}) => {
    console.log('persons component rendering')
    console.log(persons)

    

    const deletePerson = (id) => {
      const person = persons.find((p) => p.id === id)
      if (window.confirm(`Delete ${person.name}?`))
      servicePerson
        .remove(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id))
          setErrorMessage({
            text: `Information of "${person.name}" deleted`,
            type:'success'
          })
          setTimeout(() => setErrorMessage(null), 5000)
        })
        .catch((error) => {
          setErrorMessage({
            text:`Information of "${person.name}" has already been removed from server`,
            type:'error'
          })
          setTimeout(() => {setErrorMessage(null)}, 5000)
          setPersons(persons.filter((p) => p.id !== id))
        })
    }
    
    return(
      <div>
          {persons
            .filter(person => 
              person.name.toLowerCase().includes(searchName.toLowerCase())
              
            )
            .map(person => 
            <Person key={person.id} person = {person} deletePerson={() => deletePerson(person.id)}/>
          )}
        </div>
    )
  }

export default Persons