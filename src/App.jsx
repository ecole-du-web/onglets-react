import Tabs from "./components/Tabs"
import { tabsData1, tabsData2 } from "./data/tabs.js"

function App() {
  return (
    <div className="mt-24 px-6">
      <Tabs tabsData={tabsData1} />
      {/* <Tabs tabsData={tabsData2} /> */}
    </div>
  )
}

export default App
