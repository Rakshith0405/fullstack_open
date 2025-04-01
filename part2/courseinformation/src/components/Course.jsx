
const Course = ({courses}) => {
    const all_course = courses.map(course => course)
    console.log(courses)
    console.log(all_course)
    return (
      <div>
        {courses.map(course => 
          <CourseComp key={course.id} course = {course} />
        )}
        
      </div>
    )
  }
  
  const CourseComp = ({course}) => {
    console.log(course)
    const parts = course.parts
    console.log(parts.map((part) => part))
    return (
      <div>
      <Header header= {course.name} />
      <Content parts = {course.parts} />
      <Total parts= {course.parts} />
      </div>
    )
  
  }
  
  
  const Total = ({parts}) => {
    const sum = parts.reduce((x, part) => x + part.exercises, 0)
    return (
      <div>
        <p>Total of {sum} exercises</p>
      </div>
    )
  }
  
  const Header = ({header}) => {
    return (
      <div>
        <header>
          <h1>
            {header}
          </h1>
        </header>
      </div>
    )
  }
  
  const Part = ({part}) => {
    console.log(part.id)
    return (
      <p key={part.id} > {part.name} {part.exercises} </p>
    )
  }
  
  
  const Content = ({parts}) => {
    return (
      <div>
          {parts.map(part => (
            <Part key={part.id} part={part} />
          ))}
      </div>
    )
  }

  export default Course