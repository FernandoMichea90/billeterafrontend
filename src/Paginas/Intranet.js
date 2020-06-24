import React, { Fragment,useContext } from 'react'


import '../css/intranet.css'
import Sidebar from '../componentes/sidebar'
import MenuColapsable from '../componentes/MenuColapsable'
import Barra from '../componentes/Barra'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Tipogastos from '../componentes/tipos/tipogastos'
import {CRMContext,CRMProvider} from '../context/CRMContext'
import EditarTipoGastos from '../componentes/tipos/editarTipoGastos'
import Clasificacion from '../componentes/tipos/clasificacion'
import TipoIngresos from '../componentes/tipos/tipoIngresos/tipoIngresos'
import EditarTipoIngresos from '../componentes/tipos/tipoIngresos/editarTipoIngresos'
import Ingreso from '../componentes/ingresos/Ingreso'
import EditarIngreso from '../componentes/ingresos/EditarIngreso'

import Gasto from '../componentes/gastos/Gasto'
import EditarGasto from '../componentes/gastos/EditarGastos'

import Home from '../componentes/Principal'
import HomeGastos from '../componentes/Principalgastos'



function Intranet()
{
    const [auth,guardarAuth]=useContext(CRMContext);
    
    console.log( auth);
    

return(

    <Router>
    <Fragment>
        <Sidebar></Sidebar>
     
            <Barra></Barra>
        <MenuColapsable></MenuColapsable>


                <div className="margenDiv85">
                <CRMProvider value={[auth,guardarAuth]}>
                    <Switch>
                    <Route exac path="/editartipogastos/:id"  component ={EditarTipoGastos}></Route>
                    <Route exac path="/clasificacion"  component ={Clasificacion}></Route>
                    <Route exac path="/tipoingresos"  component ={TipoIngresos}></Route>
                    <Route exac path="/editaringreso/:id"  component ={EditarIngreso}></Route>

                    <Route exac path="/editartipoingresos/:id"  component ={EditarTipoIngresos}></Route>
                    
                    <Route exac path="/ingreso"  component ={Ingreso}></Route>
                    <Route exac path="/editaringresos/:id"  component ={EditarIngreso}></Route>

                    <Route exac path="/gasto" component ={Gasto}></Route>
                    <Route exac path="/editargasto/:id"  component ={EditarGasto}></Route>

                    <Route exac path="/tipogastos"  component ={Tipogastos}></Route>

                    <Route exac path="/resumengastos"  component ={HomeGastos}></Route>
                    <Route exac path="/"  component ={Home}></Route>

                    </Switch>
                     </CRMProvider>
                </div>            


</Fragment>
</Router>
    )

}

export default Intranet ;