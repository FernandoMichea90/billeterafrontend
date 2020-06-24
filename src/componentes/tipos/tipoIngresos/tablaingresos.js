import React ,{useEffect,useState}from 'react'
import { Button,Icon } from 'react-materialize'
import clienteAxios from '../../../config/axios'
import Swal from 'sweetalert2';
import {Link } from 'react-router-dom'



function Tabla(props)
{

    
    const [citas,guardarCita]=useState([]);


    //eliminar el registro 
    const eliminarRegistro = idTip => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un registro  eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // Llamado a axios
                clienteAxios.delete(`/tipodeingreso/${idTip}`)
                    .then(res => {
                        Swal.fire(  
                            'Eliminado', 
                            res.data.mensaje, 
                            'success'
                        );
                    });
                    
            }
        });
    };
    


    useEffect(()=>{

        const consultarApi=async()=>{
            try {

                //const token =localStorage.getItem('token')         
                const diariosConsulta= await clienteAxios.get(`/tipodeingreso/${props.id}`);
                guardarCita(diariosConsulta.data);
            } catch (error) {
                console.log(error)
            }
        }

        consultarApi();
        },[citas])
            

    return (


        <table>
        <thead>
          <tr>
              <th>Descripcion</th>
              <th>Editar</th>
              <th>Borrar</th>
          </tr>
        </thead>

        <tbody>
         

            {citas.map(tipGastos=>(
                 <tr>
                        <td>
                            {tipGastos.tipo}
                        </td>
                        <td>
                            <Link to={`/editartipoingresos/${tipGastos._id}`}>
                                <Icon>
                                    create
                                </Icon>
                            </Link>
                        </td>
                        <td>
                        <Button onClick={()=>eliminarRegistro(tipGastos._id)}>
                                <Icon>
                                    delete
                                </Icon>
                            </Button>
                        </td>
            </tr>

            ))}  
            
          
         
        </tbody>
      </table>
    )
}


export default  Tabla