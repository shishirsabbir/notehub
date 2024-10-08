import Profile from './Profile';

export default function Header() {
    return (
        <header className="header container">
            <div className="logo">
                <a href="#" className="logo-wrapper">
                    <img
                        src="images/logo-main.svg"
                        alt="logo"
                        className="logo-img"
                    />
                    <img
                        src="images/notehub-logo.svg"
                        className="logo-text"
                        alt="NoteHub"
                    />
                </a>
            </div>

            <Profile />
        </header>
    );
}
