import style from './style.module.css'

const Popup = (props) => {
  return (
    <div {...props} className={props.className ? `${style.Popup} ${props.className}` : style.Popup}>
      <div className={style.PopupContent}>{props.children}</div>
    </div>
  )
}

export default Popup
