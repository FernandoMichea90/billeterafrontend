import React ,{useState,useEffect} from 'react'
import jwt_decode from 'jwt-decode';
import {TextInput,Button,Icon, DatePicker, Select} from 'react-materialize'
import clienteAxios from '../../config/axios'
import Swal   from 'sweetalert2';
import moment from 'moment';

import Tabla from '../gastos/TablaGasto'
function Gasto(props){

    const  token=localStorage.getItem('token')

    
    if(token!==undefined){

     
      var decoded = jwt_decode(token);
        console.log("decoded");
        console.log(decoded);
        
        
    }

    const {id}=decoded
    console.log("id");
    console.log(id);
    
    
    const [ingreso,guardarIngreso]=useState(
        {
          usuario:decoded.id,
          fecha:moment().format('LL')

            
        })


    const [tipodeingresos,guardarlista]=useState([])    
    const actualizarState=e=>
{

guardarIngreso(
    {
        ...ingreso,[e.target.name]:e.target.value
    })
}    



useEffect(() => {

    const consultarApi=async()=>{
        try {

            //const token =localStorage.getItem('token')         
            const diariosConsulta= await clienteAxios.get(`/tipodegastos/${id}`);
            guardarlista(diariosConsulta.data);
        } catch (error) {
            console.log(error)
        }
    }

    consultarApi();
    
}, [])





const agregarIngresos=e=>{

    e.preventDefault();



    clienteAxios.post('/gasto'
    ,ingreso).then(res=>
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
                        'Se agregó gasto',
                        res.data.mensaje,
                        'success'

                    )

                


                        guardarIngreso(
                            {
                                usuario:decoded.id,
                                tipo:'',
                                descripcion:'',
                                monto:'',
                                fecha:moment().format('LL')

                            })
                    props.history.push('/gasto')
                  



        }
        
        
    })
}


    return(

        <div className="container">
            <form onSubmit={agregarIngresos}>
            <div className="row"> 
                <div className="col s12">
                    <h1>
                        Gasto
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
                id="DatePicker-5"
                value={ingreso.fecha}
              
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
                <Tabla id={id}>
                    </Tabla>            
               
            </div>
        </div>


    )

}

export default Gasto;