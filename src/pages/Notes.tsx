import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import { NoteItem } from '../components';
import { Note } from '../types';

export const Notes = ({jsonNotes}: Note) => {

    return (
        <section>
            <header className='notes__header'>
                <h1>My Notes</h1>
                {/* <input type='text' autoFocus placeholder='Keyword...' /> */}
                <button className='btn'><CiSearch/></button>
            </header>

            <div className='notes__container'>
                {
                    jsonNotes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link to='/create-note' className='btn add__btn'><BsPlusLg/></Link>
        </section>
    )
};