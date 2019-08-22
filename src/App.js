import React, { Component } from 'react'
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { saveNote } from './services/NotesService'



class App extends Component {
  constructor(props){
    super(props);    
    this.state ={
      addNew : false
    }

    this.clickAddNew = this.clickAddNew.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  clickAddNew(e){
    this.setState({
      addNew : true
    })

  }
  onCancel = () => {
    this.setState({
      addNew : false
    })
  }
  onSubmit = (note) => {
    saveNote(note);
    this.onCancel();
  }
  render() {
    return (
      <div className="App">
      <button className="add-note" onClick={this.clickAddNew} >Add New</button>
      { this.state.addNew && <NoteForm onSubmit={ this.onSubmit } onCancel={ this.onCancel } />}
      
      <NoteList />
  
      </div>
    );
  }
}

export default App;
