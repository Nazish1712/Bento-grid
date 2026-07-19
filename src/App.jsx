import Header from "./components/Header"
import './App.css'

function App() {

  return (
    <div className="h-dvh w-full max-w-4xl mx-auto pt-20 pb-10">
      <Header/>
      <div className="grid grid-cols-4 gap-4 mt-10">
      <Column>
        <Card></Card>
        <Card></Card>
      </Column>
      </div>
     </div>
  )
}

export default App
