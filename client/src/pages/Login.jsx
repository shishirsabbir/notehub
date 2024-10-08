export default function Login() {
    return (
        <section className="sign-up">
            <div className="container-sign-up">
                <img
                    src="../images/logo-main.svg"
                    alt="Logo of notehub"
                    className="logo-sign-up"
                />
                <h1 className="sign-up-title">Log In</h1>
                <form action="" className="sign-up-form">
                    <div className="form-input-area">
                        <input
                            type="email"
                            className="form-control email"
                            name="email"
                            placeholder="Email"
                            aria-label="Email address"
                            required
                        />
                        <input
                            type="password"
                            className="form-control password"
                            name="password"
                            placeholder="Password"
                            aria-label="Password"
                            required
                        />
                    </div>

                    <div className="remember-me">
                        <input
                            className="checkbox remember-me-checkbox"
                            type="checkbox"
                            name="remember"
                            aria-label="Remember me"
                            required
                        />
                        <span className="remember-me-text">
                            Remember me for 7 days
                        </span>
                    </div>

                    <button className="btn sign-btn">
                        <img
                            src="../images/box-arrow-in-left.svg"
                            alt="Sign up"
                            className="sign-btn-img"
                        />
                        <span className="sign-btn-text">Log In</span>
                    </button>
                </form>
            </div>
        </section>
    );
}
