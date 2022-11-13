import CheckIconSvg from '../../atoms/CheckIconSvg'
import style from './style.module.css'

const CheckList = (props) => {
  return (
    <li {...props} className={props.className ? `${style.CheckList} ${props.className}` : style.CheckList}>
      <CheckIconSvg />
      {props.children}
    </li>
  )
}

export default CheckList
