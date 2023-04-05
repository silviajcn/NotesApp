import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useCreateDate } from '../hooks';
import { AddNotes } from '../types';

export const CreateNote = ({ setJsonNotes }: AddNotes) => {
    
    console.log(setJsonNotes);

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (title && details) {
            //console.log({ title, details });
            
            const note = {
                id: new Date().getTime(),
                title: title,
                details: details,
                date: date
            }
            //console.log(note);

            //add this note to the Notes array:
            setJsonNotes(prevNotes =>
                [note, ...prevNotes]
            );

            //redirect to home page:
            navigate('/');

        }
    }

    return (
        <section>
            <header className='create-note__header'>
                <Link to='/' className='btn'><IoIosArrowBack /></Link>
                <button className='btn lg primary' onClick={handleSubmit}>Save</button>
            </header>

            <form className='create-note__form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Title' value={title}  autoFocus onChange={(e) => setTitle(e.target
                .value)} />
                <textarea rows={28} placeholder='Note details...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </form>
        </section>
    )
};