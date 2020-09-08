import React,{Fragment,useContext} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Intranet from '../src/Paginas/Intranet'
import {CRMContext,CRMProvider} from '../src/context/CRMContext'

import Login from '../src/Paginas/Login'
function App() {
  const [auth,guardarAuth]=useContext(CRMContext);
  
  console.log(process.env.REACT_APP_BACKEND_URL);
  console.log(process.env.REACT_APP_PORT);
  



  return (
   
  <Router>
    <Fragment>
      <CRMProvider value={[auth,guardarAuth]}>

        <Switch>


        <Route exac path="/resumeningresos"  component ={Intranet}></Route>

          <Route exac path="/"  component ={Login}></Route>





        </Switch>
        </CRMProvider>

  </Fragment>



</Router>


  );
}

export default App;
