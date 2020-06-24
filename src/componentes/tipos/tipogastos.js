import React ,{useState,useEffect} from 'react'
import jwt_decode from 'jwt-decode';
import {TextInput,Button,Icon} from 'react-materialize'
import clienteAxios from '../../config/axios'
import Swal   from 'sweetalert2'
import Tabla from './tablagastos';

function Tipogastos(props){

    const  token=localStorage.getItem('token')

    
    if(token!==undefined){

     
      var decoded = jwt_decode(token);

    }
    const [tipo,guardarTipo]=useState(
        {
          usuario:decoded.id,    
          tipo:''  
        })

    const actualizarState=e=>
{

guardarTipo(
    {
        ...tipo,[e.target.name]:e.target.value
    })
}    






const agregarTipogastos=e=>{

    e.preventDefault();



    clienteAxios.post('/tipodegastos'
    ,tipo).then(res=>
        {
                if(res.data.code===11000)
                {

                    Swal.fire({
                        type: 'error',
                        title: 'Hubo un error',
                        text: 'Ese cliente ya esta registrado'
                    })
                }   
                else {
                    Swal.fire(
                        'Se agregó el Cliente',
                        res.data.mensaje,
                        'success'

                    )

                


                        guardarTipo(
                            {
                                usuario:decoded.id,    
                                tipo:'' 
                            })
                    props.history.push('/intranet')
                  



        }
        
        
    })
}


    return(

        <div className="container">
            <form onSubmit={agregarTipogastos}>
            <div className="row"> 
                <div className="col s12">
                    <h1>
                        tipo de Gastos
                    </h1>

                </div>

                <div className="col s12">
                <TextInput
                    id="TextInput-4"
                    placeholder="Tipo de Gastos" name="tipo" value={tipo.tipo}  onChange={actualizarState}
                    />

                </div>
                <div className="col s12">
                        <Button type="submit">
                        <Icon left>
                            save
                        </Icon>
                            Ingresar 
                        </Button>
                </div>

            </div>
            </form>   


            <div>

                <Tabla id={decoded.id} >

                </Tabla>
            </div>
        </div>


    )

}

export default Tipogastos;