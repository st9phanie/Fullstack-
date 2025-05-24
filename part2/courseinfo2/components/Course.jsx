const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => {
  return (
    <div>
      {parts?.map(part => (<Part key={part.id} name={part.name} exercises={part.exercises} />))}
    </div >
  )
};

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
)

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises,0)
  return <p><strong>Number of exercises {total}</strong></p>
}

const Course = ({courses}) => {
  return (
    <div>
      {courses?.map(course => (
        <div key={course.id} >
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
        </div>
        ))}
    </div>
  )
}

export default Course
