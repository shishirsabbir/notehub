export default function NoteWriting() {
    return (
        <section className="note-writing displaying-card-writing">
            <form action="#" method="#" className="popup-card">
                <div className="note-text-container">
                    <input
                        type="text"
                        className="note-title"
                        placeholder="Title"
                        aria-label="Note title"
                    />
                    <textarea
                        name="note-textarea"
                        className="note-textarea"
                        id="note-textarea"
                        placeholder="Take a note"
                        aria-label="Note writing area"
                    ></textarea>
                </div>
                <div className="btn-group">
                    <button className="note-btn delete-btn">Delete</button>
                    <button className="note-btn cancel-btn">Cancel</button>
                </div>
            </form>
        </section>
    );
}
