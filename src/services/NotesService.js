
import { guuid } from './guuid'
import { notes } from '../test/fixtures'



    /**
     * Gets up-to-date list of notes
     */
    export const getNotes = () => {
        return notes;
        // return new Promise( resolve => resolve(notes) );
    };

    /**
     * Saves note if it has id, adds new one with new id otherwise
     * @param note 
     */
    export const saveNote = (note) =>{
        let index = notes.findIndex( ({id}) => note.id === id )
        if(index === -1){
            note.id = guuid()
            notes.push(note)
        }else{
            notes.splice(index,1,note)
        }
        return new Promise( resolve => resolve(note) )
    }
