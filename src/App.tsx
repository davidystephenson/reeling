import { JSX } from 'react'
import Reeling from './Reeling'
import SingleReeling from './SingleReeling'

function App (): JSX.Element {
  return (
    <>
      <h3>Reeling</h3>
      <SingleReeling noir />
      <div
        style={{
          width: '200px',
          height: '100px',
          background: 'black'
        }}
      >
        <Reeling size='50%' />
      </div>
      {/* <div
        style={{
          width: '100px',
          height: '200px',
          background: 'black'
        }}
      >
        <Reeling />
      </div>
      <h3>Single Reeling</h3>
      <div
        style={{
          background: 'black'
        }}
      >
        <SingleReeling size={200} />
      </div>
      <h4>Flex</h4>
      <div style={{
        background: 'black',
        color: 'white',
        padding: '20px',
        gap: '40px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
      >
        <SingleReeling size={200} />
        <h4>Reeling</h4>
        <Reeling />
      </div>
      <h4>Image</h4>
      <img src='https://i0.wp.com/the-avocado.org/wp-content/uploads/2021/04/Criterion-Logo.gif?resize=500%2C303&ssl=1' /> */}
    </>
  )
}

export default App
