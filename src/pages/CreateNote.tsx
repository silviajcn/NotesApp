import { useState, FormEvent } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useCreateDate } from '../hooks';
import { AddNotes } from '../types';

export const CreateNote = ({ setJsonNotes }: AddNotes) => {
    
    //console.log(setJsonNotes);

    const [title, setTitle] = useState<string>('');
    const [details, setDetails] = useState<string>('');
    const date: string = useCreateDate();
    const navigate: NavigateFunction = useNavigate();

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();

        if (title && details) {
            //console.log({ title, details });
            
            const note: {
                id: number;
                title: string;
                details: string;
                date: string;
            } = {
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
        <section className='edit-create-page'>
            <header className='create-note__header'>
                <Link to='/' className='btn' aria-label='Back'><IoIosArrowBack /></Link>
                <h1 className='title-create-edit'>Note</h1>
                <button className='btn lg primary' onClick={handleSubmit}>Save</button>
            </header>

            <form className='create-note__form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Title' value={title}  autoFocus onChange={(e) => setTitle(e.target
                .value)} aria-label='Input to enter title'/>
                <textarea rows={28} placeholder='Note details...' value={details} onChange={(e) => setDetails(e.target.value)} aria-label='Text area to enter note'></textarea>
            </form>
        </section>
    )
};