import React from 'react'
import { cadastraPostits, deslogaUsuario } from '../../redux/actions'
import { connect } from 'react-redux'
import "./Postits.css"

class Postits extends React.Component {
  constructor(props) {
    super(props)
  }

   cadastraOuAlteraPostits = (event) => {
    event.preventDefault()

     const form = event.target

     const dados = {
       titulo: form.titulo.value,
       texto: form.texto.value
     }

     this.props.cadastraPostits(dados)
   }
render(){
  return (
    <form className="postit" onSubmit={this.cadastraOuAlteraPostits}>
    <input
    className="postit__titulo"
    type="text"
    name="titulo"
    placeholder="Titulo"
    autoComplete="off"
    defaultValue={this.props.titulo}
    />
    <textarea className="postit__texto"
    name="texto"
    rows="5"
    defaultValue={this.props.texto}
    autoComplete="off"
    placeholder="Digite um texto"
    />
    <button className="postit__botao-concluir">Concluído</button>
    </form>
  )
}
}

export default connect(
  (state) => ({ usuario: state.usuario}),
{ cadastraPostits }

)(Postits)

