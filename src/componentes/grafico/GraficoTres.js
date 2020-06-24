import React from 'react'
import {Line} from 'react-chartjs-2';


function GraficoTres(props)
{

    const state =props.graficTres 
     
    return(
        <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Ingresos Diario',
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