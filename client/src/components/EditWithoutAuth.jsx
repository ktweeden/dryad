import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../constants/routes'

const EditWithoutAuth = function (props) {
  return (
    <p><button><Link to={routes.SIGN_IN}>Sign in</Link></button> to add to {props.title}</p>
  )
}

export default EditWithoutAuth