import Button from '../../atoms/Button'
import CardBody from '../../molecules/CardBody'
import CardHeader from '../../molecules/CardHeader'
import style from './style.module.css'

const Card = (props) => {
  return (
    <div className={`${style.Card} ${props.alias}`}>
      <CardHeader {...props} />
      <CardBody {...props} />
      <Button onClick={() => {
        props.setShowPopup(true)
        props.setSelectedPlan(props.name)
      }}
      >{props.button_label}
      </Button>
    </div>
  )
}

export default Card
