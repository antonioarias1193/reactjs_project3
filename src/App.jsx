import Nav from "./components/Layout/Nav"
import Productcard from "./components/Layout/Productcard"

function App() {

  return (
    <>
      <Nav></Nav>
      <div className='bg-indigo-600 w-full h-screen'>
        <div className="mt-16 pt-2">
          <Productcard></Productcard>
        </div>
      </div>
    </>
  )
}

export default App
