import './index.css'
import Card from './components/Card'
import Report from './components/Report'
import data from '../data.json'

function App() {

  // Al renderizar el componente, cargar los datos de daily


  console.log(data)
  return (
    <div className='w-full max-w-[80rem] grid grid-cols-1 lg:grid-cols-4 gap-4'>
      <Report/>
    
      <section className='col-span-3 border'>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5'>
          {
            data.map((activity, index) => 
              <Card
                key={index}
                activity={activity}
              />
            )
          }
        </div>

      </section>
    </div>
  )
}

export default App
