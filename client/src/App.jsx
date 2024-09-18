import { useState } from 'react';

function Form() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    async function createNote() {
        try {
            const noteObj = {
                title,
                description: desc,
            };

            const res = await fetch('http://localhost:8000/notes', {
                method: 'POST',
                body: JSON.stringify(noteObj),
            });

            console.log(res);

            // console.log(noteObj);
        } catch (err) {
            console.err(err);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        createNote();
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        placeholder="Note Title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </li>
                <li>
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        name="description"
                        placeholder="Note Description..."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </li>
                <li>
                    <button
                        // onClick={(e) => handleSubmit(e)}
                        type="submit"
                        value="submit"
                    >
                        Submit
                    </button>
                </li>
            </ul>
        </form>
    );
}

export default function App() {
    return (
        <div>
            <Form />
        </div>
    );
}
