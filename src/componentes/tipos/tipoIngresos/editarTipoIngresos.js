import React,{useState,useEffect} from 'react'
import {TextInput,Button,Icon} from 'react-materialize'
import clienteAxios from '../../../config/axios'
import Swal from 'sweetalert2'
function EditarTipoIngresos(props) {

            
    const {id}=props.match.params;

    const [tipo,guardarTipo]=useState({})

    const actualizarState=e=>
{

guardarTipo(
    {
        ...tipo,[e.target.name]:e.target.value
    })
}    

const retornarRegistro=async()=>
{

    const consulta=await clienteAxios.get(`/tipodeingresoedit/${id}`);
    
    
    guardarTipo(consulta.data);
}    

useEffect(()=>{

    retornarRegistro();        
},[])


const actualizarRegistro = e => {
    e.preventDefault();

    // enviar petición por axios
    clienteAxios.put(`/tipodeingresoedit/${tipo._id}`,tipo) 
        .then(res => {
            // validar si hay errores de mongo 
            if(res.data.code === 11000) {
                Swal.fire({
                    type: 'error',
                    title: 'Hubo un error',
                    text: 'No se pudo actualizar el registro'
                })
            } else {
                Swal.fire(
                    'Correcto',
                    'Se actualizó Correctamente',
                    'success'
                )
            }

            // redireccionar
            props.history.push('/tipoingresos');
        })
}
    
    return (

        <div className="container">
            <form onSubmit={actualizarRegistro}>
            <div className="row"> 
                <div className="col s12">
                    <h1>
                       Editar  tipo de Ingresos
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
                            create
                        </Icon>
                            Editar
                        </Button>
                </div>

            </div>
            </form>   


            
        </div>


    )
}


export default EditarTipoIngresos;