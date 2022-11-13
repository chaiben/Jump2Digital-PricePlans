import style from './style.module.css'

const H2 = (props) => {
  return (
    <h2 {...props} className={props.className ? `${style.H2} ${props.className}` : style.H2}>{props.children}</h2>
  )
}

export default H2
