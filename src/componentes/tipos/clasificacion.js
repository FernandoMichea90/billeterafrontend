import React from 'react'
import { Link } from 'react-router-dom'
import {Icon} from 'react-materialize'

import '../../css/clasificacion.css'

function Clasificacion(){

    return(

        <div className="container">

            <div className="row">

                <div className="col s12 margenLink">
                    <Link to='tipoingresos'>
                    <Icon>
                        send
                    </Icon>

                    Tipo de Ingresos
                    </Link>

                </div>
                 
                <div className="col s12">
                    <Link to='/tipogastos'>
                    <Icon>
                        send
                    </Icon>
                    Tipo  de gastos 
                    </Link>

                </div>
            </div>


        </div>

    )



}


export default Clasificacion