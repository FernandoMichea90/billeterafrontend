import React from 'react';
import {Bar} from 'react-chartjs-2';


function GraficoDos(props){

  console.log(props.graficDos);
  

const state=props.graficDos;


/*
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}
*/

    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Ingreso Mensual',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
    );
  }

export default GraficoDos;
