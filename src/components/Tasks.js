import {useState}  from 'react' 



const Tasks = () => {
    const [tasks , setTasks] =usestate(

    {
        id : 1 , 
        text:'Doctors Appointement',
        day  : 'Feb 5th at 2:30pm',
        reminder : true , 
    },
    {
        id : 2 , 
        text:'Meeting at School',
        day  : 'Feb 6th at 1:30pm',
        reminder : true , 

    },
    {

        id : 3 , 
        text:'Food shopping ',
        day  : 'Feb 20th at 2:30pm',
        reminder : false , 
    })

  return (
    
    
    
    setTasks([...tasks,{}]),
    <>
    {tasks.map((task)=>(
    <h3 key={task.id}>{task.text}</h3>
    ))}
    </>
  )
}

export default Tasks