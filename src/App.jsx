import { ModalProvider } from "./sections/FormModal/ModalContext";
import './App.css';
import AppRoutes from "./routes/AppRoutes";
 
const App = () => {
return (
<ModalProvider>
<AppRoutes />
</ModalProvider>
)
}
 
export default App;