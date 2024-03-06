import logo from './logo.svg';
import Count from './Count/Count';
import Form from './Form/Form';
import Fruits from './Fruits/Fruits';
import FormsState from './FormsWithState/FormsState';
import Page from './LangagueSwitcher/Page';
import FormValidation from './FormValidation/FormValidation';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainRoutes  from './Routes/MainRoutes';
import MainContext from './ContextApi/MainContext';


function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}
      {/* <Fruits fruits= {["appel, banane"]}></Fruits> */}
      {/* <FormsState></FormsState> */}
      {/* <Page></Page> */}
      {/* <FormValidation></FormValidation> */}
      {/* <MainRoutes></MainRoutes> */}
      <MainContext></MainContext>
    </div>
  );
}

export default App;
