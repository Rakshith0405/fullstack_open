import { useState } from 'react'


const Button = ({onClick, text}) => {
  return (
      <button onClick = {onClick} >{text}</button>
  )
}

const Votes = ({value}) => <p>has {value} </p>

const Title = ({title}) => <h1>{title}</h1>

const Anecdote = ({value}) => <p>{value}</p>

const BestAnecdote = ({value, votes, high_votes}) => {
  if (high_votes > 0){
    return (
      <div>
        <Anecdote value={value} />
        <Votes value = {votes}  />
      </div>
    )
  }
  else{
    return <p>No votes yet!</p>
  }
  
}
 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  

  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  

  const anecdoteHandler = () => {
    console.log('before hitting next..', selected)
    const x = Math.floor(Math.random() * anecdotes.length)
    setSelected(x)
    console.log('after hitting next...', selected)
  }

  const votesHandler = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
    console.log(index_of_highQuote)
  }

  const high_votes = Math.max(...votes)
  const index_of_highQuote = votes.indexOf(high_votes)
  


  return (
    <div>
      <Title title = 'Anecdote of the day' />
      <Anecdote value = {anecdotes[selected]} />
      <Button onClick={votesHandler} text ='vote' />
      <Button onClick = {anecdoteHandler} text='Next anecdote' />
      <Votes value = {votes[selected]} />
      <Title title='Anecdote with most votes' />
      
      <BestAnecdote value = {anecdotes[index_of_highQuote]} votes={high_votes} high_votes ={high_votes} />
    </div>
  )
}

export default App