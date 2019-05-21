import React from 'react';

function validate(email, password) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0, //true if email is empty
        password: password.length === 0, //true if password is empty
    };
}

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',

            touched: {
                email: false,
                password: false,
            },
        };
    }

    handleEmailChange = (evt) => this.setState({ email: evt.target.value });

    handlePasswordChange = (evt) => this.setState({ password: evt.target.value });

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    handleSubmit = (evt) => {
        if (!this.canBeSubmitted()) {
            evt.preventDefault();
            return;
        }
    }

    canBeSubmitted() {
        const errors = validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    render() {
        const errors = validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];

            return hasError ? shouldShow : false;
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className={shouldMarkError('email') ? "error" : ""}
                    type="text"
                    placeholder="Ingrese email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    onBlur={this.handleBlur('email')}
                />
                <span className={shouldMarkError('email') ? "error" : "hidden"}
                >email incorrecto</span>


                <input
                    className={shouldMarkError('password') ? "error" : ""}
                    type="password"
                    placeholder="Ingrese contraseña"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    onBlur={this.handleBlur('password')}
                />
                <span className={shouldMarkError('password') ? "error" : "hidden"}
                >Contraseña incorrecta</span>

                <button disabled={isDisabled}>Ingresar</button>
            </form>
        )
    }
}

export default LoginForm