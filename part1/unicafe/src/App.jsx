import { useState } from 'react'


const Title = ({text}) => {
   return (
    <h1>{text}</h1>
   )
}

const Button = ({onClick, text}) => {
  return (
      <button onClick = {onClick}>
        {text}
      </button>
  )
}

const StatRow = ({name, value}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({stat_vals}) => {
  if (stat_vals.total == 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatRow name='Good' value={stat_vals.good} />
        <StatRow name='Nuetral' value={stat_vals.nuetral} />
        <StatRow name='Bad' value={stat_vals.bad} />
        <StatRow name='Total' value={stat_vals.total} />
        <StatRow name='Average' value={stat_vals.average} />
        <StatRow name='Positive' value={stat_vals.positive} />
      </tbody>
    </table>
  )
}




const App = () => {

  const [good, setGood]  = useState(0)
  const [bad, setBad]  = useState(0) 
  const [nuetral, setNuetral]  = useState(0) 

  const goodHandler = () => {
    setGood(good + 1)
  }
  const badHandler = () => {
    setBad(bad + 1)
  }
  const nuetralHandler = () => {
    setNuetral(nuetral + 1)
  }
  const total = (good + bad + nuetral)
  const average = (good + (-1 * bad) + (0 * nuetral) )/(total)
  const positive = (good/total) * 100 
  const stat_vals = {
    'good' : good,
    'bad' : bad,
    'nuetral' : nuetral,
    'total': total,
    'positive' : positive,
    'average' : average,
  }


  return (
    <div>
      <Title text='Give Feedback' />
      <Button onClick={goodHandler} text = 'good' />
      <Button onClick={nuetralHandler} text = 'neutral' />
      <Button onClick={badHandler} text = 'bad' />
      <Title text='Statistics' />
      <Statistics stat_vals = {stat_vals} />
    </div>
  )
}

export default App