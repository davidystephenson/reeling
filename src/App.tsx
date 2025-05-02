import LoaderView from "./loader-view"
import MultiloaderView from "./multiloader-view"

function App() {
  return (
    <div style={{ background: 'black', color: 'white', padding: '20px' }}>
      <h1>Loader</h1>
      <LoaderView />
      <h1>Multiloader</h1>
      <MultiloaderView />
    </div>
  )
}

export default App
