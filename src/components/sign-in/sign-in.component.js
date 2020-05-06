import React from "react";
import "./sign-in.style.scss"

import FormInput from "../form-input/formInput.component"
import CustomButton from "../custom-button/CustomButtom.component"
import { signInWithGoogle } from "../../firebase/fireBase.Utile"

class SignIpComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    handelSubmit = e => {
        e.preventDefault();
        console.log(`email ${this.state.email}   password ${this.state.password}`)
        this.setState({
            email: "",
            password: ""
        })
    }

    handelChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        HandelChange={this.handelChange}
                        label="email"
                        required />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        HandelChange={this.handelChange}
                        required />

                    <div className="buttons">
                        <CustomButton type="submit" >
                            Sign In
                        </CustomButton>

                        <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>
                            {""}
                        Sign In with google{""}
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIpComponent;