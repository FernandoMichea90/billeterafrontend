import React from 'react'
import {SideNav,SideNavItem,Button} from 'react-materialize'
import Usuario from '../imagenes/usuarios/perfil.png'
import home from '../imagenes/iconos/home.png'
import calendario from '../imagenes/iconos/calendario.png'
import money from '../imagenes/iconos/money.png'
import pay from '../imagenes/iconos/pay.png'
import settings from '../imagenes/iconos/settings.png'
import logout from '../imagenes/iconos/logout.png'
import user from '../imagenes/iconos/user.png'

function menuColapsable(){


return(
<div>
  <style>
    {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
  </style>
  <SideNav
    id="SideNav-10"
    options={{
      draggable: true
    }}
    trigger={<Button className="hola" node="button">SIDE NAV DEMO</Button>}
  >
    <SideNavItem
      user={{
        background: 'https://placeimg.com/640/480/tech',
        email: 'fmicheam@gmail.com',
        image:  Usuario,
        name: 'Fernando Michea'
      }}
      userView
    />
    <SideNavItem
      href="#!icon"
      
    >
    <img className="logoImg"  alt="" src={home} ></img>  

      Inicio
    </SideNavItem>
    <SideNavItem
      href="#!icon"
     
    >
    <img className="logoImg"  alt="" src={money} ></img> 
      Ingresos
    </SideNavItem>
    <SideNavItem
      href="#!icon"
      
    >
    <img className="logoImg"  alt="" src={pay} ></img> 
      Gastos
    </SideNavItem>
    <SideNavItem
      href="#!icon"
     
    >
    <img className="logoImg"  alt="" src={calendario} ></img>
      Periodo
    </SideNavItem>
    <SideNavItem
      href="#!icon"
     
    >
        <img className="logoImg"  alt="" src={settings} ></img>
      Clasificacion
    </SideNavItem>
     <SideNavItem
      href="#!icon"
     
    >
        <img className="logoImg"  alt="" src={user} ></img>
      Cuenta 
    </SideNavItem>
    <SideNavItem
      href="#!icon"
     
    >
        <img className="logoImg"  alt="" src={logout} ></img>
      Salir
    </SideNavItem>
  
  
  </SideNav>
</div>
)

}

export default menuColapsable;