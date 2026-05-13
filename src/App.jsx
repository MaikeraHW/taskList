import './App.css'
import FormEditor from './assets/components/FormEditor'
import { useState } from 'react'

function App() {

  const [selectedTask, setSelectedTask] = useState(null)
  const [taskList, setTaskList] = useState(LISTADETAREFAS)

  function handleSaveTask(id, newName){
    console.log(id, newName)
    setTaskList(atual => atual.map(a => a.id === id ? {...a, name : newName} : a))
    setSelectedTask(null)

  }

  return (
    <div>
      {taskList.map(task => (<p key={task.id} onClick={() => setSelectedTask(task)}>{task.name}</p>))}
      {selectedTask ? ( <FormEditor task={selectedTask} onSave={handleSaveTask} key={selectedTask.id}/>) : ( <p>Selecione uma tarefa para editar</p>) }

    </div>
  )
}

export default App
