import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Input } from './input';
import Frame from './login';

import Resp from './Responsive.js';


function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Resp/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
