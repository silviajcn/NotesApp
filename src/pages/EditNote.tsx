import { useState, FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { AddNotes, NotesJson } from '../types';
import { useCreateDate } from '../hooks';

interface Props {
    jsonNotes: NotesJson[];
    setJsonNotes: AddNotes;
}

export const EditNote = (
    {jsonNotes, setJsonNotes}: Props
): JSX.Element => {

    //console.log(setJsonNotes);
    
    const navigate = useNavigate();
    const { id } = useParams();
    let idN = parseInt(id);
    //console.log(typeof idN)
    //console.log(idN)

    const note: NotesJson | undefined = jsonNotes.find((item) => item.id === idN);
    const [title, setTitle] = useState(note?.title);
    const [details, setDetails] = useState(note?.details);

    // Change date:
    const date = useCreateDate();

    const handleForm = (e:FormEvent) => {
        e.preventDefault();

        if (title && details) {
            const newNote = { ...note, title, details, date }

            const newNotes = jsonNotes.map(item => {
                if (item.id === idN) {
                    item = newNote;
                }
                return item;
            });

            setJsonNotes(newNotes);
        }

        //redirect to home page:
        navigate('/');

    }

    const handleDelete = () => {

        if (window.confirm('Are you sure yoy want to delete?')) {
            const newNotes = jsonNotes.filter(item => item.id != idN);

            setJsonNotes(newNotes);
            navigate('/');
        }
        
    }

    return (
        <section className='edit-create-page'>
            <header className='create-note__header'>
                <Link to='/' className='btn'><IoIosArrowBack /></Link>
                <h1 className='title-create-edit'>Edit</h1>
                <div className='container-btns'>
                    <button className='btn primary' onClick={handleForm}><FaCheck/></button>
                    <button className='btn danger' onClick={handleDelete}><RiDeleteBin6Line /></button>
                </div>
            </header>

            <form className='create-note__form' onSubmit={handleForm}>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                <textarea rows={28} placeholder='Note details...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </form>
        </section>
    )
};