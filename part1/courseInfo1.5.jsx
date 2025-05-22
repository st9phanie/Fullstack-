const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1></div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content} {props.number}</p>
    </div>

  )
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.content1} number={props.number1} />
      <Part content={props.content2} number={props.number2} />
      <Part content={props.content3} number={props.number3} />

    </div>

  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.number1 + props.number2 + props.number3}</p></div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content1 = {course.parts[0].name} content2 = {course.parts[1].name} content3 = {course.parts[2].name} number1={course.parts[0].exercises} number2={course.parts[1].exercises} number3={course.parts[2].exercises} />
      <Total number1={course.parts[0].exercises} number2={course.parts[1].exercises} number3={course.parts[2].exercises} />
    </div>
  )
}

export default App
