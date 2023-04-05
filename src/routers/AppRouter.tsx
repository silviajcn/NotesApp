import { useState, useEffect } from 'react'; 
import { Routes, Route, Navigate } from 'react-router-dom';
import { CreateNote, EditNote, Notes } from '../pages';
import { NotesJson } from '../types';

const AppRouter = () => {

    const item = localStorage.getItem('notes');
    const result = item ? JSON.parse(item) : [];

    const [jsonNotes, setJsonNotes] = useState<NotesJson[]>(result);
    //console.log({ setJsonNotes });
    
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(jsonNotes));
    }, [jsonNotes]);
    
    return (
        <main id='app'>
            <Routes>
                <Route path='/' element={<Notes jsonNotes={ jsonNotes } />} />
                <Route path='/create-note' element={<CreateNote setJsonNotes={setJsonNotes} />} />
                <Route path='/edit-note/:id' element={<EditNote
                    jsonNotes={jsonNotes}
                    setJsonNotes={setJsonNotes}
                />} />

                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </main>
    )
};

export default AppRouter;