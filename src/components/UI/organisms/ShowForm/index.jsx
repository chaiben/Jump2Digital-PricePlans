import Button from '../../atoms/Button'
import { useState } from 'react'
import H2 from '../../atoms/H2'
import Popup from '../../molecules/Popup'
import style from './style.module.css'

const Card = (props) => {
  const [errorEmail, setErrorEmail] = useState('')
  const { email, setEmail } = props

  const sendForm = () => {
    // Check if email is empty
    if (email === '') {
      setErrorEmail('Please, enter your email')
      return
    }

    // Check email format
    const valid = email.match(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    if (!valid) {
      setErrorEmail('Invalid email format')
      return
    }

    console.log(`Email ${email} select plan ${props.selectedPlan}`)
    props.setShowPopup(false)
  }
  return (
    <Popup>
      <div className={style.Form}>
        <H2>You have selected the {props.selectedPlan} plan.</H2>
        <div>Please, enter your email and we will get you back soon.</div>
        <div><input placeholder='Enter your email' type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        <div className={style.Error}>{errorEmail}</div>
        <div className={style.FormButton}>
          <Button
            className={style.send}
            onClick={sendForm}
          >
            Send
          </Button>
          <Button
            className={style.cancel}
            onClick={() => props.setShowPopup(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Popup>
  )
}

export default Card
