export default function NoteReading() {
    return (
        <section className="note-showing displaying-card-reading">
            <div className="note-showing-container">
                <h1 className="note-showing-title">Function</h1>
                <p className="note-showing-texts">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum cupiditate sint veritatis quis vitae libero corporis
                    asperiores excepturi quia porro! Eum sunt, perferendis
                    voluptas debitis quia minus dolorem dolorum veritatis
                    quisquam amet praesentium ducimus pariatur omnis non neque
                    totam quis maxime cumque, consectetur suscipit maiores?
                    Facilis doloremque similique atque aut.
                </p>
            </div>
            <button className="edit-btn btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#fff"
                    className="bi-pencil"
                    viewBox="0 0 16 16"
                >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
                <span className="edit-btn-text">Edit</span>
            </button>
        </section>
    );
}
