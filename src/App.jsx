import react, { useEffect, useState } from 'react';
import './App.css'


export default function App() {

  let [arr, setArr] = useState()
  let [inp, setInp] = useState("")

  function getInput(e) {
    e.preventDefault()
    setInp(e.target[0].value)
  }

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${inp}&page=1&per_page=10&client_id=Ls1sbKKD7yVkQv7RhoZyrPabpnxuPuPIUCTqqTPrNgA`).then((item) => item.json()).then((data) => setArr(data.results))
  }, [inp])

  useEffect(() => {
    console.log("DidMount")
  }, [])

  console.log(arr)
  return (
    <>
      <div className='overall'>
        <h1>SEARCH HERE....</h1>
        <form onSubmit={() => getInput(event)}>
          <input type="text" name="name" />
          <button>Submit</button>
        </form>
        <div className='container'>
          {arr && arr.map((item) => (
            <div className='box'>
              <img src={item.urls.raw} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}