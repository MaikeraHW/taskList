import './App.css'
import { useReducer } from 'react'
import { initialState, AppReducer } from './assets/reducers/AppReducers'




function App() {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  async function handleSubmit(e){
    e.preventDefault()

     dispatch({type: 'INICIAR_ENVIO'})
    try{

      await new Promise(resolve => setTimeout(resolve, 2000))
      dispatch({type: 'SUCESSO'})

      await new Promise(resolve => setTimeout(resolve, 2000))
      dispatch({type: 'RESET'})

    } catch(err){

        dispatch({type: 'ERRO', mensagem: "Deu erro, tentar novamente"})
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='nome' value={state.nome} onChange={(e) => dispatch({type: 'CAMPO_ALTERADO', campo: 'nome', valor: e.target.value})}/>
      <input type="email" placeholder='e-mail' value={state.email} onChange={(e) => dispatch({type: 'CAMPO_ALTERADO', campo: 'email', valor: e.target.value})}/>

      <button disabled={state.status === 'enviando'}>{state.status === 'enviando' ? 'Aguarde' : 'Enviar'}</button>
    </form>

    {state.status === 'sucesso' ? <p> Mensagem enviada com sucesso </p> : null}
    {state.status === 'erro' ? <p> Erro ao enviar mensagem </p> : null}
    <p>Tentativas de cadastro: {state.tentativas}</p>
    </>
  )
}

export default App
