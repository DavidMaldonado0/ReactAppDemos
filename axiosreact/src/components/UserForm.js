import React from 'react';

const UserForm = (props) => {
    return (
        <form onSubmit={props.GetUser}>
            <input style={{ margin:"20px auto", display:"block", padding:"15px " }} type="text" name="username"/>
            <button>Submit</button>
        </form>
    );
}

export default UserForm
