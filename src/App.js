import PhoneView from './app/features/phones/PhoneView'
import TvView from './app/features/tvs/TvView'
import TabletView from './app/features/tablets/TabletView'
import './App.css'

function App() {
  return (
    <div className="section-one">
      <PhoneView />
      <TvView />
      <TabletView />
    </div>
  )
}

export default App
