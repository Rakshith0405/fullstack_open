import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import servicePerson from './services/persons'
import Notification from './components/Notification'


function App() {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setnewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    servicePerson
      .getAll()
      .then(response => {
        setPersons(response.data)
    })
  
  }, [])


  const inputHandler = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const newNumberHandler = (event) =>{
    setnewNumber(event.target.value)
  }

  const searchHandler = (event) => {
    setSearchName(event.target.value)
  }


  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name : newName,
      number : newNumber
    }
    
    

    const found = persons.find((person) => person.name === newName);
    console.log('found submitted name in persons as', found)
    if(found === undefined){
      servicePerson
      .create(personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response.data))
        setNewName('')
        setnewNumber('')
        setErrorMessage({
          text:`Added "${personObject.name}"`,
          type:'success'
        })
        setTimeout(()=>{
          setErrorMessage(null)
        }, 5000)
    })
    
    }
    else{
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const updatedPerson = {...found, number: newNumber}
        
        servicePerson
          .update(found.id, updatedPerson)
          .then(response => {
            setPersons(persons.map(person => 
              person.id !== found.id ? person : response.data
            ))
            setNewName('')
            setnewNumber('')
            setErrorMessage({
              text : `updated "${found.name}" with new number`,
              type:'success'
            })
            setTimeout(()=>{
              setErrorMessage(null)
            }, 5000)
          })
          .catch(error => {
            console.error('Error updating person:', error)})
      }
    }
    
  }
 
  


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter searchName={searchName} handler={searchHandler} />

      <h2>Add a new</h2>

      <PersonForm h0={addPerson} i1={newName} h1={inputHandler} i2={newNumber} h2 = {newNumberHandler} />

      <h2>Numbers</h2>

      <Persons persons={persons} searchName={searchName} setPersons={setPersons}  setErrorMessage= {setErrorMessage} />
    </div>
  )
}

export default App
