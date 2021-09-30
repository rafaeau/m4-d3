import React from 'react'
import Badge from 'react-bootstrap/Badge'

function MyBadge(props) {
    return (
        <div className="text-center">
            <Badge variant={props.color}>{props.text}</Badge>{' '}
        </div>
    )
}

export default MyBadge
