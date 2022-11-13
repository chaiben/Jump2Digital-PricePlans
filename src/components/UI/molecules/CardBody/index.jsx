import CheckList from '../CheckList'
import style from './style.module.css'

const CardBody = (props) => {
  const featuresElements = props.features.map(
    (el, i) =>
      <CheckList className={props.features_enabled[i] ? 'enabled' : 'disabled'} key={`${props.alias}_${i}`}>{el}</CheckList>
  )
  return (
    <ul className={props.className ? `${style.CheckBody} ${props.className}` : style.CheckBody}>
      {featuresElements}
    </ul>
  )
}

export default CardBody
