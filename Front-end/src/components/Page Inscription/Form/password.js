import React, { useState } from 'react';
import showPwdImg from '../../../images/show-password.svg';
import hidePwdImg from '../../../images/hide-password.svg';
import './password.css';
import './Form.css';

function Password() {

    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
        <div className="item inputpass">
            <input
                className="inputForInsription"
                name="pwd"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={e => setPwd(e.target.value)}z
                required
            />
            <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd(prevState => !prevState)}
            />
        </div>
    );
}

export default Password;