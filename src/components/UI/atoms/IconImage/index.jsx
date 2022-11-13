import style from './style.module.css'

const IconImage = (props) => {
  const images = require.context('../../../../assets/', true)
  const icon = images(`./${props.src}`)
  return (
    <div className={style.IconImage}>
      <img src={icon} alt={props.alt} />
    </div>
  )
}

export default IconImage
