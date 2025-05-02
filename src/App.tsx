import Reeling from './Reeling'
import SingleReeling from './SingleReeling'

function App() {
  return (
    <>
      <div style={{
        background: 'black',
        color: 'white',
        padding: '20px',
        gap: '40px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <SingleReeling />
        <Reeling />
      </div>
      <img src='https://i0.wp.com/the-avocado.org/wp-content/uploads/2021/04/Criterion-Logo.gif?resize=500%2C303&ssl=1' />
    </>
  )
}

export default App
