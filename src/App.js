import './App.css'
import data from './cards-data.json'
import ShopCardsPage from './components/pages/ShopCardsPage'

function App () {
  return (
    <div className='App'>
      <ShopCardsPage data={data} />
    </div>
  )
}

export default App
