import Section from "./components/layout/Section";
import { ModalProvider } from "./sections/FormModal/ModalContext";
import './App.css';
 
const App = () => {
return (
<ModalProvider>
<Section/>
</ModalProvider>
)
}
 
export default App;