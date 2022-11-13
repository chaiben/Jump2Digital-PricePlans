import ShopCards from '../../templates/ShopCards'
import style from './style.module.css'

const ShopCardsPage = (props) => {
  return (
    <div className={style.ShopCardsPage}>
      <ShopCards {...props.data} />
    </div>
  )
}

export default ShopCardsPage
