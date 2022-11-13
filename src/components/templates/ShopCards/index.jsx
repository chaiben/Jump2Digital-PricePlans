import Card from '../../UI/organisms/Card'
import style from './style.module.css'
import './style.css'
import ShowForm from '../../UI/organisms/ShowForm'
import { useState } from 'react'

const ShopCards = (props) => {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [email, setEmail] = useState('')
  const cards = props.plans.map(plan =>
    <Card
      {...plan}
      features={props.features}
      key={plan.alias}
      setShowPopup={setShowPopup}
      selectedPlan={selectedPlan}
      setSelectedPlan={setSelectedPlan}
    />)
  return (
    <div className={`ShopCards ${style.ShopCards}`}>
      {showPopup && <ShowForm selectedPlan={selectedPlan} setShowPopup={setShowPopup} email={email} setEmail={setEmail} />}
      {cards}
    </div>
  )
}

export default ShopCards
