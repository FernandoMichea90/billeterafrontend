

import React from 'react';
import {Pie} from 'react-chartjs-2';



function GraficoUno(props){


var lista=props.prueba.datasets
var listados=props.prueba.labels






const state = {
  labels: listados,
  datasets: [
    {
      label: 'Rainfall',
      
    backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      
      data: lista[0].data
    }
  ]
}


    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
             
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
        }

    export default GraficoUno;