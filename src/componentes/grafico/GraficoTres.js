import React from 'react'
import {Line} from 'react-chartjs-2';


function GraficoTres(props)
{

    var descripcion="";
    const state =props.graficTres 
    var title=props.title

    if(title=="Gastos Diario")
    {
        descripcion="Gastos"

    }
    else
    {
      title="Ingresos Diario"
      descripcion="Ingresos"
    }
    return(
        <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:title,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )

}

export default GraficoTres