import { useState } from 'react'

//Button
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

//StatisticsLine
const StatisticsLine = ({text,value,unit}) => {
  return (
    <tr><td>{text}: {value} {unit}</td></tr>
  )
}


//Statistics
const Statistics = ({ good, bad, neutral }) => {
  var all = good+bad+neutral
  var avg = (good-bad)/all
  var pos = good/all*100
  if (good + bad + neutral === 0) {
    return (<div>No feedback given</div>);
  }
  return (
    <table>
      
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={avg} />
      <StatisticsLine text="positive" value={pos} unit={'%'}/>

    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <>
      <h1>give feedback</h1>
      <br></br>
      <div>
        <Button text={"Good"} onClick={increaseGood} />
        <Button text={"Neutral"} onClick={increaseNeutral} />
        <Button text={"Bad"} onClick={increaseBad} />
        <br></br>
        <h1>statistics</h1>
        <br></br>
        <Statistics good={good} bad={bad} neutral={neutral} />


      </div>
    </>
  )
}

export default App
