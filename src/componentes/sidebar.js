import React from 'react'
import '../css/intranet.css'
import home from '../imagenes/iconos/home.png'
import calendario from '../imagenes/iconos/calendario.png'
import money from '../imagenes/iconos/money.png'
import pay from '../imagenes/iconos/pay.png'
import settings from '../imagenes/iconos/settings.png'
import logout from '../imagenes/iconos/logout.png'
import { Link } from 'react-router-dom'

function  sidebar()
{

    return(

           
    <div className="divMenuLeft">
    <ul>
        <li>
        <Link to="/">

            <img className="logoImg"  alt="" src={home} ></img>

         </Link>     
        </li>
    </ul>
    <ul>
        <li>
        <Link to="/ingreso">
        <img className="logoImg"  alt="" src={money} ></img>  
        </Link>
        </li>
    </ul>
    <ul>
        <li>
        <Link to="/gasto">
        <img className="logoImg"  alt="" src={pay} ></img>  
        </Link>
        </li>
    </ul>
    <ul>
        <li>
         <Link to="/calendario">   
        <img className="logoImg"  alt="" src={calendario} ></img>
        </Link>  
        </li>
       
    </ul>
    <ul>
        <li>
         <Link to='/clasificacion'>   
        <img className="logoImg"  alt="" src={settings} ></img>  
        </Link>
        </li>
    </ul>
    <ul>
        <li>
        <img className="logoImg"  alt="" src={logout} ></img>  
        </li>
    </ul>
</div>
                                                                                                      

    )



}

export default  sidebar;



