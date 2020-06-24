import React, { useEffect,useState } from 'react'
import Resumen from './ingresos/ResumenIngreso'
import clienteAxios from '../config/axios'
import moment from 'moment'
import ReactDOM from 'react-dom';
import App from '../componentes/grafico/GraficoUno';
import GraficoDos from '../componentes/grafico/GraficoDos'
import GraficoTres from '../componentes/grafico/GraficoTres'
import jwt_decode from  'jwt-decode'
import '../css/principal.css'
import {Button, Icon} from 'react-materialize'
import { Link } from 'react-router-dom';


function Principaltres(){

    var day;
    const [ingreso,ResumenIngreso]=useState({

        total:''
    })
    const [ingresomes,Enviaringresomes]=useState({})
    const [gastomes,Enviargastomes]=useState({})
    const [prueba,enviarprueba]=useState({
        datasets: [{
            data: []
        }],
    
        labels: [
        ]
    })
    const [graficDos,enviarGrafdos]=useState({
        datasets: [{
            data: []
        }],
    
        labels: [
        ]
    })

   
    const [graficTres,enviarGraftres]=useState({
        datasets: [{
            data: []
        }],
    
        labels: [
        ]
    })



    const retornarMes=(mes)=>
    {
        switch (mes) {
            case 1:
              day = "Enero";
              break;
            case 2:
              day = "Febreo";
              break;
            case 3:
               day = "Marzo";
              break;
            case 4:
              day = "Abril";
              break;
            case 5:
              day = "Mayo";
              break;
            case 6:
              day = "Junio";
              break;
            case 7:
              day = "Julio";
              break;

              case 8:
              day = "Agosto";
              break;  
              case 9:
                day = "Septiembre";
            break;
            case 10:
                day = "Octubre";
            break;
            case 11:
                day = "Noviembre";
            break;

            case 12:
                day = "Diciembre";
            break;
          }

    }
    

    useEffect(() => {

    const obtenervariable =async()=>{
        console.log("paso por el useEffect");
        
        //Primer Div 
        const ingresoresumen= await clienteAxios.get('/ingresostotales')
        console.log(ingresoresumen);
        
        const gastosresumen= await clienteAxios.get('/gastostotales')
         var totalAmount=ingresoresumen.data[0].totalAmount-gastosresumen.data[0].totalAmount;
        ingreso.total=totalAmount
         ResumenIngreso(ingreso) 

         
        //Segundo Div 

        var pruebames=moment().month()+1;
        const ingresopormes= await clienteAxios.get('/ingresostotalesmes')
        var ingresomes=ingresopormes.data
        for(var i=0;i<ingresomes.length;i++)
        {
            if(pruebames== ingresomes[i]._id)
            {
              Enviaringresomes(ingresomes[i])      
            }

        }

        //Tercer Div 

       
        const gastopormes= await clienteAxios.get('/gastostotalesmes')
        var gastomes=gastopormes.data
        for(var i=0;i<gastomes.length;i++)
        {
            if(pruebames== gastomes[i]._id)
            {
              Enviargastomes(gastomes[i])      
            }

        }


        //Gragico Uno 
        const graficouno= await clienteAxios.get('/gastosportipo')
        console.log(graficouno.data);
        
        var lista=graficouno.data
        var dataset=[];
        var label=[]

        for(var i=0;i<lista.length;i++)
        {
            dataset.push(lista[i].quantity)
            const consulta=await clienteAxios.get(`/tipodegastosedit/${lista[i]._id}`);   
            const {tipo}=consulta.data 
            label.push(tipo)
        }
        
        
       enviarprueba({
            datasets: [{
                data: dataset
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: label
        })





        // Grafico Dos 
        var datasetgrafdos=[];
        var labelgrafdos=[]

        var grados=gastopormes.data
        for(var i=0;i<grados.length;i++)
        {
           console.log(grados[i]);
           retornarMes(grados[i]._id)
            labelgrafdos.push(day)
            datasetgrafdos.push(grados[i].totalAmount)
        }


        enviarGrafdos({
            datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,
            data: datasetgrafdos
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels:labelgrafdos
        })




        // Grafico tres 


         const token=localStorage.getItem('token')   

         if(token!==undefined){

     
            var decoded = jwt_decode(token);              
          }
      
          const {id}=decoded

        const  ingresosdata= await clienteAxios.get(`/gasto/${id}`)

         var datasetgrafTres=[];
         var labelgrafTres=[]
 
         var ingresos=ingresosdata.data
         for(var i=0;i<ingresos.length;i++)
         {  

            var {fecha,monto}=ingresos[i];
            console.log(fecha +monto);
            labelgrafTres.push(moment(fecha).format('LL'))
            datasetgrafTres.push(monto)
            
         }
 
 
         enviarGraftres({
             datasets: [{
                                 label: 'Ingreso',
                     backgroundColor: 'rgba(75,192,192,1)',
                     borderColor: 'rgba(75,192,192,1)',
                     fill: false,
                     lineTension: 0.5,
                     
                     borderWidth: 2,
                 data: datasetgrafTres
             }],
         
             // These labels appear in the legend and in the tooltips when hovering different arcs
             labels:labelgrafTres
         })

      
         
    }

    obtenervariable()

    }, [])

        return(

                <div className="container">

                    <div className="row">

                        <div>
                           <Link to={"/"} className="btn botonChangedos">
                               <Icon>
                                   compare_arrows
                               </Icon>
                               Ingresos</Link> 
                        </div>

                        <div className="col s4">
                            <Resumen></Resumen>

                        </div>

                        <div className="col s4">
                       
                        </div>
                        <div className="col s4">
                         
                        </div>


                    </div>



                    <div className="row">

                        <div className="col s6">
                        
                        
                                <App prueba={prueba} />


                        </div>

                        <div className="col s6">

                            <GraficoDos graficDos={graficDos}>

                            </GraficoDos>


                        </div>
                        <div className="col s12">
                          <GraficoTres graficTres={graficTres}>

                          </GraficoTres>
                        </div>


                    </div>
                </div>



        )


}

export default Principaltres;