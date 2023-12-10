import { useDispatch, useSelector } from "react-redux"
import { getTaskData, getTaskError, getTaskStatus } from "../features/tasks/taskSlice"
import { useEffect, useState } from "react"
import { CardStyled } from "../components/cardStyled"
import { getRandomTasks } from "../features/tasks/taskThunk"


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
    console.log(tasks)
    return (
        <>
        {spinner ? <h3>Loading</h3> : <>
            {tasks.map((task,map) => 
                <CardStyled>
                    <p>{task.content}</p>
                </CardStyled>
            )}
       </>}
       </>
       )
}