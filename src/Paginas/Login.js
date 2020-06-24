import React, { Fragment,useState,useEffect,useContext } from 'react'

import {TextInput,Button} from 'react-materialize'
import '../css/login.css'
import clienteAxios from '../config/axios'
import jwt_decode from 'jwt-decode';
import Swal   from 'sweetalert2'
import {CRMContext}from '../context/CRMContext'


function Login (props) {


    const [credrenciales,guardarCredenciales]=useState({});
    const [prueba,guardarToken]=useState({});
    const [auth,guardarAuth]=useContext(CRMContext);


        useEffect(() => {

            var {token}=prueba
           console.log("ahi un token "+token);

           if(token!==undefined){

            console.log("entro");
            
            var decoded = jwt_decode(token);
             console.log(decoded);
            }
           
        }, [prueba])

    const leerDatos=e=>
    {
        guardarCredenciales({

            ...credrenciales,[e.target.name]:e.target.value
        })

    }

    const iniciarSesion=async e=>{

        e.preventDefault();
        try {
            
            const respuesta =await clienteAxios.post('/iniciar-sesion',credrenciales)
            var {token}=respuesta.data

            console.log("respuesta "+token);
            
            guardarToken(respuesta.data)
            
            guardarAuth({
                token,auth:true
              })


              localStorage.setItem('token',token)
             
         
            
            Swal.fire(
                'Login Correcto','Has Iniciado Sesion','success'

            )
            
            props.history.push('/resumeningresos');

            
        } catch (error) {
            console.log(error);
            Swal.fire(
                {
                    icon:'error',title:'hubo un error',text:error
  
                })
        }
    }

    return(

        <Fragment>
        <div className="fondoLeft">



        </div>

        <div className="fondoRight">

           
            
            <div className="row divLogin">

            <p className="pTitulo col s12">
                ¡Prueba! estas en Billetera 
            </p>

            <p>Te estabamos esperando</p>
            <form onSubmit={iniciarSesion}>
                <div  className="col s12">
                 <TextInput className="texto largoInput"
                        id="TextInput-4"
                        name="correo"
                        label="Correo"
                        onChange={leerDatos}
                        />

                </div>

                <div  className="col s12 margenInput">
                 <TextInput
                        id="TextInput-4"
                        label="Contraseña"
                        name="password"
                        onChange={leerDatos}
                        className="largoInput"
                        password
                        />

                </div>

                <div className="col s12">
                <Button 
                            node="button"
                            className="botonIngresar"
                            type="onSubmit"
                            
                        >
                            Ingresar
                        </Button>
                </div>

                <div className="col s12">
                <Button
                            node="button"
                            className="botonCrearCuenta"
                            style={{
                            marginTop: '5px'
                            }}
                        >
                            Crear Cuenta 
                        </Button>

                        

                </div>

                </form>


            </div>

        </div>

        </Fragment>

        )
}

export default Login;