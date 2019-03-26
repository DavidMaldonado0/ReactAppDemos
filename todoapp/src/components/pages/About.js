import React from 'react';

function About() {
    return(
        <React.Fragment> 
            <h1 style={hStyle}>About</h1>
            <p style={pStyle}>This is the TodoList app v1.0.0. It is a 
                part of the ReactAppDemos.
            </p>
        </React.Fragment>
    )
}

const hStyle = {
    color: '#fff',
    textAlign: 'center',
    paddingTop: '20px'
}

const pStyle = {
    color: '#fff',
    paddingTop: '20px',
    textAlign: 'center',
}


export default About;