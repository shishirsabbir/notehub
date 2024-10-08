export default function SignUp() {
    return (
        <section className="sign-up">
            <div className="container-sign-up">
                <img
                    src="../images/logo-main.svg"
                    alt="Logo of notehub"
                    className="logo-sign-up"
                />
                <h1 className="sign-up-title">Create an account</h1>
                <form action="" className="sign-up-form">
                    <div className="form-input-area">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control firstname"
                                name="firstname"
                                placeholder="First name"
                                aria-label="First name"
                                required
                            />
                            <input
                                type="text"
                                className="form-control lastname"
                                name="lastname"
                                placeholder="Last name"
                                aria-label="Last name"
                                required
                            />
                        </div>
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
                        <input
                            type="password"
                            className="form-control confirm-password"
                            name="confirm-password"
                            placeholder="Confirm Password"
                            aria-label="Confirm Password"
                            required
                        />
                    </div>

                    <button className="btn sign-btn">
                        <img
                            src="../images/box-arrow-in-left.svg"
                            alt="Sign up"
                            className="sign-btn-img"
                        />
                        <span className="sign-btn-text">Sign Up</span>
                    </button>
                </form>
            </div>
        </section>
    );
}
