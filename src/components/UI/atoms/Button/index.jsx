import style from './style.module.css'

const Button = (props) => {
  return (
    <button {...props} className={props.className ? `${style.Button} ${props.className}` : style.Button}>{props.children}</button>
  )
}

export default Button
