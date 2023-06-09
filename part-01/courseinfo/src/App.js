const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },

      {
        name: 'Using props to pass data',
        exercises: 7,
      },

      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
}

const Header = (props) => {
  // console.log('Header / props --->', props)
  // console.log('Header / props.name --->', props.name)
  // console.log('Header / props.course --->', props.course)
  // console.log('Header / props.course.name --->', props.course.name)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  //console.log('Part props --->', props)
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>   
    </div>
  )
}

const Content = (props) => {
  //console.log('Content props --->', props)
  return (
    <div>
      <Part part1={props.course.parts[0].name} exercises1={props.course.parts[0].exercises}/>
      <Part part2={props.course.parts[1].name} exercises2={props.course.parts[1].exercises}/>
      <Part part3={props.course.parts[2].name} exercises3={props.course.parts[2].exercises}/>  
    </div>
  )
}

const Total = (props) => {
  //console.log('Total  props --->', props)
  return (
    <div>
      <p>
        Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </p>
    </div>
  )
}

export default App;