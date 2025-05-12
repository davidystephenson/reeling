import { JSX } from 'react'
import Reeling from './Reeling'

function App (): JSX.Element {
  return (
    <div style={{ background: 'black', padding: '20px' }}>
      <Reeling size='240px' />
    </div>
  )
}

export default App
