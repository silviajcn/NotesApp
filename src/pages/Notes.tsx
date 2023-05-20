import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NoteItem } from '../components';
import { Note, NotesJson } from '../types';
import { CiSearch } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';

export const Notes = ({ jsonNotes }: Note) => {
    
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [filteredNotes, setFilteredNotes] = useState<NotesJson[]>(jsonNotes);

    const handleSearch = (): void | NotesJson[] => {
        setFilteredNotes(jsonNotes.filter(note => {
            if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
                return note;
            }
        }))
    }

    useEffect(() => {
        handleSearch()
    }, [text]);
    

    return (
        <section className='app-notes-container'>
            <header className='notes__header'>
                {!showSearch && <h1>My Notes</h1>}
                {showSearch && <input type='text' autoFocus placeholder='Keyword...' onChange={(e) => { setText(e.target.value); handleSearch(); }} />}
                <button className='btn' onClick={() => setShowSearch(prevState => !prevState)} aria-label='Button search note'>
                    {showSearch ? <MdClose /> :<CiSearch />}
                </button>
            </header>

            <div className='notes__container'>
                {
                    filteredNotes.length === 0 && <p className='empty__notes'>No notes found</p>
                }
                {
                    filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link to='/create-note' className='btn add__btn' aria-label='Button add note'><BsPlusLg /></Link>
        </section>
    )
};