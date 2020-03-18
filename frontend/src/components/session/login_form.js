import React from 'react';
import { Link } from 'react-router-dom';



class LoginForm extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            username: "",
            email: "",
            password: "",
            teamId: ""
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.linkModal = this.linkModal.bind(this);
        this.props.clearErrors();
        this.fillDemo = this.fillDemo.bind(this);
        this.addTeam = this.addTeam.bind(this);
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

   



   
    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className='errors'>{
                    this.props.errors.map((error, i) => (
                        <li className='error' key={`error=${i}`}>{error}</li>
                    ))
                }</ul>
            )
        }
    }

    // fillDemo(e) {
    //     e.preventDefault();
    //     this.props.loginForm({ email: 'mca@beastieboys.com', password: 'password', team_id: 1 })
    //         .then(() => (this.props.closeModal())).then(() => this.props.history.push('/home'))
    // }

    // addDemo() {

    //     return (
    //         <input className='login-signup-button' onClick={this.fillDemo} value='DEMO LOGIN' />
    //     )

    // }


    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const user = Object.assign({}, this.state);

        
        this.props.processForm(user).then(() => {
            this.props.closeModal();
            this.props.history.push('/home');
        },
            // () => this.renderErrors()
        );
    }


    render() {
        return (
            <form className='login form' onSubmit={this.handleSubmit}>
                <div className="form-top">
                    <h1 className='form-title'>{this.props.formType}</h1>
                    <br />
                    <br />
    

                    <label className='login-label'>Email
                    </label>

                    <input className='login-field' type="text" placeholder="    name@company.com" value={this.state.email} onChange={this.update('email')} />

                    <label className='login-label'>Password
                    </label>

                    <input className='login-field' type="password" placeholder="    password" value={this.state.password} onChange={this.update('password')} />

                </div>

                {this.renderErrors()}
                <div className="form-bottom">
                    <br />
                    <input className='login-button' type="submit" value={this.props.formType} />
                    {/* {this.addDemo()} */}
                    {/* {this.addLink()} */}
                </div>

            </form>
        )
    }
}

export default LoginForm;