import React, { useState } from 'react';

function validate(email, password) {
    return {
        email: email.length === 0, //true if email is empty
        password: password.length === 0, //true if password is empty
    };
}

function LoginForm(props) {
    const [email, setEmail]  = useState('mario@gmail.com')
    const [password, setPassword]  = useState('')
    const [touched, setTouched]  = useState(false)

    const handleBlur = (field) => (evt) => {
        setTouched({ ...touched, [field]: true })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!canBeSubmitted()) {        
            return;
        }
    }

    const getUserCamUrl = () => {
        var urlCam1 = window.Configs.urlCam1;
        var urlCam2 = window.Configs.urlCam2;
        switch (email) {
            case 'mario@gmail.com' : 
                props.onclick(urlCam1)
                break;
            case 'araya@gmail.com' : 
                props.onclick(urlCam2)
                break;
            default : 
                return;
        }
    }

    const canBeSubmitted = () => {
        const errors = validate(email, password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    const errors = validate(email, password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = (field) => {
        const hasError = errors[field];
        const shouldShow = touched[field];
        return hasError ? shouldShow : false;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={shouldMarkError('email') ? "error" : ""}
                type="text"
                placeholder="Ingrese email"
                value={email}
                onChange={ev => setEmail(ev.target.value)}
                onBlur={handleBlur('email')}
            />
            <span className={shouldMarkError('email') ? "error" : "hidden"}
            >email incorrecto</span>


            <input
                className={shouldMarkError('password') ? "error" : ""}
                type="password"
                placeholder="Ingrese contraseña"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                onBlur={handleBlur('password')}
            />
            <span className={shouldMarkError('password') ? "error" : "hidden"}
            >Contraseña incorrecta</span>

            <button disabled={isDisabled} onClick={getUserCamUrl}>Ver Cámara</button>
        </form>
    )
}

export default LoginForm