import { Link } from 'react-router-dom';
import { NoteDetails } from '../types/types';

export const NoteItem = (
    { note }: NoteDetails
) => {

    //console.log(note);

    return (
        <Link to={`/edit-note/${note.id}`} className='note'>
            <h4>{note.title.length > 80 ? (note.title.substring(0, 50)) + '...' : note.title}</h4>
            <p>{note.date}</p>
        </Link>
    )
};