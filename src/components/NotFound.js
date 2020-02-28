import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';


class NotFound extends Component {

    render() {
        return <div>
                Esta página no existe
                <Link to="/">Regresar al home</Link>
        </div>
    }
}

export default NotFound;