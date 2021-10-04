import React from 'react'
import Alert  from 'react-bootstrap/Alert'

export default function AlertComponent(props) {
    return (
        <Alert variant ={props.variant}>
            {props.content}
        </Alert>
    );
}

