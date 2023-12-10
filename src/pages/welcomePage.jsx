import { useDispatch, useSelector } from "react-redux"
import { getTaskData, getTaskError, getTaskStatus, removeTask } from "../features/tasks/taskSlice"
import { useEffect, useState } from "react"
import { CardStyled } from "../components/cardStyled"
import { getRandomTasks } from "../features/tasks/taskThunk"
import { CardContainerStyled } from "../components/cardContainerStyled"


export const WelcomePage = () => {

    const [spinner,setSpinner] = useState(true)
    const [tasks,setTasks] = useState([])
    const dispatch = useDispatch()
    const tasksData = useSelector(getTaskData)
    const tasksStatus = useSelector(getTaskStatus)
    const tasksError = useSelector(getTaskError)

    useEffect(()=> {
        if (tasksStatus == "idle"){
            dispatch(getRandomTasks())
        }
        if (tasksStatus == "pending"){
            setSpinner(true)
        }
        else if (tasksStatus == "fulfilled"){
            setTasks(tasksData)
            setSpinner(false)
        }
    },[dispatch,tasksData,tasksStatus])
    

    return (
        <CardContainerStyled>
        {spinner ? <h3>Loading</h3> : <>
            {tasks.map((task,map) => 
                <CardStyled>
                    <p>{task.content}</p>
                    <button onClick={() => dispatch(removeTask(task.content))}>Remove task</button>
                </CardStyled>
            )}
       </>}
       </CardContainerStyled>
       )
}