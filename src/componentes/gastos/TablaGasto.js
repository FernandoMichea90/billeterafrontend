import React ,{useEffect,useState}from 'react'
import { Button,Icon } from 'react-materialize'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2';
import {Link } from 'react-router-dom'
import moment from 'moment';




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
                clienteAxios.delete(`/gasto/${idTip}`)
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
                const diariosConsulta= await clienteAxios.get(`/gasto/${props.id}`);
                 var lista=diariosConsulta.data    
                 
                for(let i=0;i<lista.length;i++)
                {
                    var ingres=lista[i];
                    var {tipo,fecha}=lista[i] 
                    var tipoState=await clienteAxios.get(`/tipodegastosedit/${tipo}`);
                    lista[i].tipo=tipoState.data.tipo
                    lista[i].fecha=moment(fecha).format('LL')

                }
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
              <th>Fecha</th>
              <th>Descripcion</th>
              <th>Tipo</th>
              <th>Monto</th>  
              <th>Editar</th>
              <th>Borrar</th>
          </tr>
        </thead>

        <tbody>
         

            {citas.map(tipGastos=>(
                 <tr>
                        
                        <td>
                            {tipGastos.fecha}
                        </td>
                        <td>
                            {tipGastos.descripcion}
                        </td>
                        <td>
                            {tipGastos.tipo}
                        </td>
                        <td>
                            {tipGastos.monto}
                        </td>
                        
                        <td>
                            <Link to={`/editargasto/${tipGastos._id}`}>
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