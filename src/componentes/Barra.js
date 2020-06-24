import React from 'react'
import {Navbar,NavItem,Icon} from 'react-materialize'
import user from '../imagenes/iconos/user.png'

function Barra()


{

    return (


        <Navbar
        className="barra"
        alignLinks="right"
  brand={<a className="brand-logo sidenav-trigger"  data-target="SideNav-10" >
       < Icon >menu</Icon>
      Billetera</a>}
  data-target="SideNav-10"
  menuIcon={<Icon className="hola">cloud</Icon>}
  options={{
    draggable: false,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
>
  
  <NavItem >
   <button data-target="SideNav-10" class="sidenav-trigger botonSindecoracion">   
  <img className="logoImg"  alt="" src={user} ></img>  
  </button>
  </NavItem>
</Navbar>
       
    )


}

export default Barra