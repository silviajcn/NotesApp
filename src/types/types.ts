import { Dispatch, SetStateAction } from 'react';

export interface NotesJson {
    id: number | undefined;
    title: string;
    details: string;
    date: string;
}

export interface Note {
    jsonNotes: NotesJson[];
}

export interface NoteDetails {
    note: NotesJson;
}

// export interface AddNotes {
//     setJsonNotes: (jsonNotes: NotesJson) => NotesJson[];
// }

// export interface AddNotes {
//     setJsonNotes: Dispatch<SetStateAction<NotesJson[]>>;
// }

export type AddNotes = {
    setJsonNotes: React.Dispatch<React.SetStateAction<NotesJson[]>>;
}