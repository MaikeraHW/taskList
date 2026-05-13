import { useId, useState } from 'react'
import styles from './FormEditor.module.css'

export default function FormEditor({task, onSave}){

    const [taskName, setTaskName] = useState(task.name)

    return(
        <>
        <h2>Editando a tarefa com a Id: {task.id}</h2>

        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
        <button onClick={() => onSave(task.id, taskName)}>Salvar</button>
        </>
    )
}