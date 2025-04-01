import { useEffect, useState } from 'react'
import axios from 'axios'
import Display from './components/Display'
import Input from './components/Input'


function App() {

  const baseCountryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all/'

  //statehooks
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState(null)


  //effecthooks
  useEffect(() => {
        //setCountryUrl(`${[...countryUrl]}/${country}`)
        const promise = axios.get(`${baseCountryUrl}`)
        promise.then(response => {
          setCountries(response.data)
          console.log(response.data)
        } )
        console.log(promise)
      }
      , [])
  

  //eventhandlers
  const newCountry = (event) => {
    setCountry(event.target.value)
    console.log(event.target.value)
  }


  //do not render until countries data taken
  if(!countries){
    return null
  }

  return (
    <div>
      <Input value={country} inputHandler={newCountry} />
      <Display countries_names={countries} country={country} />
    </div>
  )
}

export default App
