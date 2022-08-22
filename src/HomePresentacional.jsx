import React, { useState } from 'react'
import dog from './assets/dog.svg'
import dog_blue from './assets/dog_blue.svg'

function HomePresentacional(props){
    const [formVisible, setFormVisible ] = useState(false)
    const [user, setUser ] = useState('')
    const [password, setPassword ] = useState('')

    const [token, setToken] = useState('')

    const handlerFormAuth = () => {
        setFormVisible(true)
    }

    const handlerToken = () => {
        const h_token = fetch(`http://localhost:3000/auth`, {method: 'POST', body: JSON.stringify({name: user, pass: password}), headers: {'content-type': 'application/json'}})
        .then(res => res.json())
        .then(result => setToken(result))
        props.authSuccess()
        return h_token
    }

    return (
        <div className="landing-content">
            <div className="landing-content-logo-left">
                <img className="landing-logo" src={dog} alt="" />
            </div>
            <div className="landing-content-logo-rigth">
                <img className="landing-logo-small" src={dog_blue} alt="" />
                <div className="landing-title">Just rigth now...</div>
                <div className="landing-subtitle">Join Woffing today.</div>
                <button className="landing-button-auth" onClick={handlerFormAuth}>Sign Auth</button>
                <div className="landing-form">
                    { formVisible == true
                        ? 
                        <form style={{textAlign: 'center'}}>
                            <label>User:</label>
                            <input className="input-home"type="text" name="text" onChange={(e)=>setUser(e.target.value)} />
                            <br/><br/>
                            <label>Password:</label>
                            <input  className="input-home-pass"     onChange={(e) =>setPassword(e.target.value)} type="password" name="password"/>
                            <br/><br/>
                            <button className="content-input-button" type="button" onClick={()=> {
                               handlerToken()
                            }}>Send</button>
                        </form>
                        : ''
                    }
                </div>
                <div className="landing-text-auth">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</div>
            </div>
            <div className="landing-footer">
                <ul>
                    <li className="landing-footer-display">About</li>
                    <li className="landing-footer-display">Help Center</li>
                    <li className="landing-footer-display">Terms of Service</li>
                    <li className="landing-footer-display">Privacy Policy</li>
                    <li className="landing-footer-display">Cookie Policy</li>
                    <li className="landing-footer-display">Accessibility</li>
                    <li className="landing-footer-display">Ads Info</li>
                    <li className="landing-footer-display">Block</li>
                    <li className="landing-footer-display">Status</li>
                    <li className="landing-footer-display">Carrers</li>
                    <li className="landing-footer-display">Brand Resources</li>
                    <li className="landing-footer-display">Advertising</li>
                </ul>
            </div>
        </div>
    )
}

export default HomePresentacional