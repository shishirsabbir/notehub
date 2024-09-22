/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

function DropDown() {
    return (
        <div className="dropdown-content">
            <a href="#">My account</a>
            <a href="#" className="log-out">
                Log out
            </a>
        </div>
    );
}

function Header() {
    const [dropActive, setDropActive] = useState(false);

    return (
        <header className="header container">
            <div className="logo">
                <a href="#" className="logo-text logo-font logo-wrapper">
                    <img
                        src="images/logo-bg3.png"
                        alt="logo"
                        className="logo-img"
                    />
                    <span className="note">Note</span>
                    <span className="hub">Hub</span>
                </a>
            </div>
            <div className="dropdown">
                <button
                    className="dropbtn"
                    onClick={() => setDropActive(!dropActive)}
                >
                    <div className="dropbtn-img"></div>
                </button>

                {dropActive && <DropDown />}
            </div>
        </header>
    );
}

function Card({ title, description }) {
    return (
        <div className="card">
            <h1 className="card-header">{title}</h1>
            <p className="card-details">{description}</p>
        </div>
    );
}

function Container() {
    const [notes, setNotes] = useState([]);

    async function fetchNotes() {
        try {
            const res = await fetch("http://localhost:8000/notes");
            const data = await res.json();
            const allNotes = data.data.notes;
            console.log(allNotes);

            setNotes(() => [...allNotes]);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(function () {
        fetchNotes();
    }, []);

    return (
        <div className="all-cards">
            {notes &&
                notes.map((note) => {
                    return (
                        <Card
                            key={note._id}
                            title={note.title}
                            description={note.description}
                        />
                    );
                })}
        </div>
    );
}

function Main() {
    return (
        <main className="main container">
            <button className="cta-btn">
                <div className="cta-btn-wrapper">
                    <img src="images/pen.svg" alt="Pen" className="btn-img" />
                    <span className="btn-text">New note</span>
                </div>
            </button>
            <Container />
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">
                Developed by Shishir Shabbir and Sifat Raihan
            </p>
        </footer>
    );
}

export default function App() {
    return (
        <>
            <Header />
            <div className="line"></div>
            <Main />
            <Footer />
        </>
    );
}
