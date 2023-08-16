import PhoneView from './app/features/phones/PhoneView'
import TvView from './app/features/tvs/TvView'
import AdminView from './app/features/admin/AdminView'
import './App.css'

function App() {
  return (
    <>
      <div className="section-one">
        <PhoneView />
        <TvView />
      </div>
      <div className="">
        <AdminView />
      </div>
    </>
  )
}

export default App
