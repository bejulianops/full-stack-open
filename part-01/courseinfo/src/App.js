// Refactor the code so that it consists of three new components: 
// Header, Content, and Total. 

// All data still resides in the App component, which passes the necessary data to each component using props. 

// Header takes care of rendering the name of the course, 
// Content renders the parts and their number of exercises and 
// Total renders the total number of exercises.



const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}  
        part2={part2} exercises2={exercises2} 
        part3={part3} exercises3={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        In '{props.part1}' part there are {props.exercises1} exercises.
      </p>
      <p>
        In '{props.part2}' part there are {props.exercises2} exercises.
      </p>
      <p>
        In '{props.part3}' part there are {props.exercises3} exercises.
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        The total number of exercises is {props.sum}.
      </p>
    </div>
  )
}

export default App;
