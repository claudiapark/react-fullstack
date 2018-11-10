import React, { Component } from 'react'
import { cadastraPostit, alteraPostit, removePostit } from '../../redux/actions'
import { MdDelete } from 'react-icons/md'
import { connect } from 'react-redux'
import './Postits.css'

class Postit extends Component {
  constructor(props) {
    super(props)
    this.state = { editando: false }
  }

  cadastraOuAlteraPostit = (evento) => {
    evento.preventDefault()

    const form = evento.target
    const cadastrando = !this.props.id

    if (cadastrando) {
    
    const dados = {
    
      titulo: form.titulo.value,
      texto: form.texto.value
    }
    
    this.props.cadastraPostit(dados)

    form.reset()
  } else {
    const dados = {
      id: this.props.id,
      titulo: form.titulo.value,
      texto: form.texto.value
    };
    this.props.alteraPostit(dados);
    this.setState({editando: false}); 
  }
}

editaPostit = () => {
  this.setState({editando: true});
}

removePostit = (evento) => {
  evento.stopPropagation()
  this.props.removePostit(this.props.id);
}

  render() {
    const cadastrando = !this.props.id

    return (
      <form className="postit" onClick={this.editaPostit} onSubmit={this.cadastraOuAlteraPostit}>
       {
         !cadastrando && this.state.editando && (
          <button  className="postit__botao-remover" type="button" onClick={this.removePostit}>
           <MdDelete/>
          </button>
         )
        }
        <input
          className="postit__titulo"
          type="text"
          name="titulo"
          placeholder="Título"
          autoComplete="off"
          defaultValue={this.props.titulo}
        />
        <textarea
          className="postit__texto"
          name="texto"
          placeholder="Digite um texto..."
          rows={5}
          autoComplete="off"
          defaultValue={this.props.texto}
        />
        {(cadastrando || this.state.editando) && (
            <button className="postit__botao-concluir">
            Concluído
          </button>
         
          
        )}


      
      </form>
    )
  }
}

export default connect(
  null, 
  { cadastraPostit, alteraPostit,removePostit }
)(Postit)