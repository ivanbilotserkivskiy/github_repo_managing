import { RecoilRoot } from 'recoil';
import TopBar from './components/TopBar/TopBar';
import Issues from './components/Issues/Issues';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
const App = () => {
  return (
    <RecoilRoot>
      <DndProvider backend={HTML5Backend}>  
      <>
        <TopBar />
        <Issues/>
      </>
      </DndProvider> 
    </RecoilRoot>
  )
}

export default App
