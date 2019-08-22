import React, { Component } from 'react'

class NoteForm extends Component {
    constructor(props) {
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.titleInput = React.createRef();
        this.noteInput = React.createRef();

    }

    static defaultProps = {
        note: {
            title: '',
            note: ''
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const titleInput = this.titleInput.current;
        // titleInput.value
        const noteInput = this.noteInput.current;
        // noteInput.value
        this.defaultProps = {
            note:{
                title: titleInput.value,
                note: noteInput.value
            }
        }
        titleInput.value = '';
        noteInput.value = '';
        this.props.onSubmit(this.defaultProps.note);        
    }

    render() {
        return (
            <React.Fragment>
                <div className="overlay"></div>
                <div className="app-note-form">
                    <form>
                        <div className="form-group">
                            <label>Title:</label>
                            <input className="form-control" ref={ this.titleInput } name="title" />
                        </div>
                        <div className="form-group">
                            <label>Note:</label>
                            <textarea className="form-control" name="note" ref={this.noteInput} />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-default pull-right" onClick={ this.props.onCancel } >Cancel </button>
                            <button type="submit" className="btn btn-default pull-right" onClick={ this.onSubmit } >Save</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>


        );
    }
}

export default NoteForm;