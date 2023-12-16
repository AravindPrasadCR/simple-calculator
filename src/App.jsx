import './App.css'

function App() {

  const displayData = (data) => {
    result.value += data;
  }

  const output = () => {
    if (result.value != 0) {
      try {
        result.value = eval(result.value)
      }
      catch {
        result.value = "Error!!!"
      }
    }
  }

  const reset = () => {
    result.value = ""
  }

  const removeLast = () => {
    result.value = result.value.slice(0, -1)
  }

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center  mt-5 flex-column gap-3 bg-dark rounded' style={{ height:'600px', width:'340px'}}>

        <div className='text-white mb-4  text-center '><h1 className='fw-bold' >CALCULATOR</h1></div>

        <div>
          <input style={{ width: '300px', height: '70px', fontSize: '40px', borderRadius: '20px' }} className="mb-3 text-center" id='result' type="text" readOnly placeholder="0" />
        </div>

        <div className='d-flex gap-3 w-100'>
          <button onClick={() => displayData('7')}>7</button>
          <button onClick={() => displayData('8')}>8</button>
          <button onClick={() => displayData('9')}>9</button>
          <button onClick={() => displayData('+')}><i class="fa-solid fa-plus"></i></button>
        </div>

        <div className='d-flex gap-3 w-100'>
          <button onClick={() => displayData('4')}>4</button>
          <button onClick={() => displayData('5')}>5</button>
          <button onClick={() => displayData('6')}>6</button>
          <button onClick={() => displayData('-')}><i class="fa-solid fa-minus"></i></button>
        </div>

        <div className="d-flex gap-3 w-100">
          <button onClick={() => displayData('1')}>1</button>
          <button onClick={() => displayData('2')}>2</button>
          <button onClick={() => displayData('3')}>3</button>
          <button onClick={() => displayData('*')}><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div className="d-flex gap-3 w-100">
          <button onClick={removeLast}><i class="fa-regular fa-rectangle-xmark"></i></button>
          <button onClick={() => displayData('0')}>0</button>
          <button onClick={() => displayData('.')}>.</button>
          <button onClick={() => displayData('/')}><i class="fa-solid fa-divide"></i></button>
        </div>

        <div className="d-flex gap-3 w-100">
          <button className='btn btn-light shadow mb-1 w-50  fs-5' onClick={reset}>AC</button>
          <button className='btn btn-light shadow mb-1 w-50 fs-5' onClick={output}>=</button>
        </div>

      </div>
    </>
  )
}

export default App