import { useState, useRef } from 'react';
import classes from './auth-form.module.css';
const AuthForm = (req, res) => {

    const [isLogin, setIsLogin] = useState(true);

    const emailRef = useRef()
    const passwordRef = useRef()

    function switchAuthModeHandler() {
        setIsLogin(!isLogin)
    }

    async function signup(e) {

        e.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        console.log(email, password);

        const response = await fetch('/api/signup', {
            method: 'POST',
            
            body: JSON.stringify({
                email,
                password
            }),

        })

        const data = await response.json()

        console.log(data);
    }

    return (
        <section className={classes.holder}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form >
                <div >
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailRef} />
                </div>
                <div >
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordRef}
                    />
                </div>
                <div >

                    <button onClick={signup}>{isLogin ? 'Login' : 'Create Account'}</button>
                    <button
                        type='button'
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AuthForm