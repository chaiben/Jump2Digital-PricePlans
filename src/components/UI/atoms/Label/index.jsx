import style from './style.module.css'

const Label = (props) => {
  return (
    <label {...props} className={props.className ? `${style.Label} ${props.className}` : style.Label}>{props.children}</label>
  )
}

export default Label
