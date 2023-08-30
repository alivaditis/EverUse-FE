import { useState } from "react"
import '../styles/_Form.scss'
const validator = require("email-validator");

const Form = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [comments, setComments] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)

  const submitRequest = (e) => {
    e.preventDefault()
    if (!validator.validate(email)) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
    if (!firstName) {
      setFirstNameError(true)
    } else {
      setFirstNameError(false)
    }
    if (!lastName) {
      setLastNameError(true)
    } else {
      setLastNameError(false)
    }
  }

  return (
    <form className='request-form'>
      <h2>Customer Info</h2>
      <label htmlFor='request-email'>Email Address</label>
      <input name='request-email' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
      {emailError && <p className='field-error'>* Please enter a valid email address</p>}
      <label htmlFor='request-first-name'>First Name</label>
      <input name='request-first-name' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      {firstNameError && <p className='field-error'>* Please enter your first name</p>}
      <label htmlFor='request-last-name'>Last Name</label>
      <input name='request-last-name' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      {lastNameError && <p className='field-error'>* Please enter your last name</p>}
      <label htmlFor='request-comments'>Comments/Questions/Concerns</label>
      <textarea name='request-comments' className='request-comments' value={comments} onChange={(e) => setComments(e.target.value)}/>
      <button className='request-submit' onClick={(e) => submitRequest(e)}>Submit</button>
    </form>)
}

export default Form