import PhoneView from './app/features/phones/PhoneView'
import TvView from './app/features/tvs/TvView'
import AdminView from './app/features/admin/AdminView'
import CommentsView from './app/features/comments/CommentsView'
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
        <hr />
        <CommentsView />
      </div>
    </>
  )
}

export default App
