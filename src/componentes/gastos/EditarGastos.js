import React, { useState,useEffect } from 'react'
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios'
import moment from 'moment'
import {Select,Icon,DatePicker,Button,TextInput} from 'react-materialize'


function EditarGasto(props)
{
    const {id}=props.match.params;

    const [ingreso,GuardarIngreso]=useState({
        fecha:moment().format('LL')

    });
    const [tipodeingresos,guardarlista]=useState([])    


 
useEffect(()=>{
    const retornarRegistro=async()=>
    {
    
        const consulta=await clienteAxios.get(`/gastoedit/${id}`);
        
        var {usuario,fecha,tipo}=consulta.data
        consulta.data.tipo=tipo
        consulta.data.fecha=moment(fecha).format('LL')
        const diariosConsulta= await clienteAxios.get(`/tipodegasto/${usuario}`);
        guardarlista(diariosConsulta.data);
        GuardarIngreso(consulta.data);
    }    

    retornarRegistro();        
},[])




    const actualizarState=e=>
    {
    
    GuardarIngreso(
        {
            ...ingreso,[e.target.name]:e.target.value
        })
    }    


    const  editarIngresos=e=>
    {
        e.preventDefault();

        // enviar petición por axios
        clienteAxios.put(`/gastoedit/${ingreso._id}`,ingreso) 
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
                props.history.push('/ingreso');
            })

    }


    return(


        <div className="container">
            <form onSubmit={editarIngresos}>
            <div className="row"> 
                <div className="col s12">
                    <h1>
                        Editar Ingresos
                    </h1>

                </div>

                <div className="col s12">

            <DatePicker options={{format:'mmm dd, yyyy',i18n:{
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      months: [
        'January',
        'February',
        'March',
        'April',
        'Mayo',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]}}}
                label="fecha"
                value={ingreso.fecha}
                id="DatePicker-5"
                onChange={(newDate)=>
                    {
                     actualizarState(
                         {
                            target:
                            {
                                name:"fecha",
                                value:moment(newDate).format('LL')

     
                            }     

                         })   
                      

                    }}
            
            >


            </DatePicker>

                </div>

                <div className="col s12">
                <TextInput
                    id="TextInput-4"
                    placeholder="Descripcion" name="descripcion" value={ingreso.descripcion}  onChange={actualizarState}
                    />

                </div>

                <div className="col s12">
                <Select
                    onChange={actualizarState}
                    name="tipo"
                    multiple={false}
                    value={ingreso.tipo}
                    options={{
                      classes: '',
                      dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                      }
                    }}
                >
                    <option value="">
                            Seleccione
                    </option>
                    {tipodeingresos.map(tipIng=>(
                            <option value={tipIng._id}>
                                               {tipIng.tipo} 
                                            </option>

                        ))}
                </Select>
                </div>
                
                <div className="col s12">
                <TextInput
                    id="TextInput-4"
                    placeholder="Monto" name="monto"  value={ingreso.monto} onChange={actualizarState}
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
                        
               
            </div>
        </div>


    )

}

export default EditarGasto