import React,{useState} from 'react'

import {DatePicker,Button,Icon} from 'react-materialize'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
function Calendario(props){

    const [periodo,guardarPeriodo]=useState(
        {
        inicio:moment().format('LL'),
        fin:moment().format('LL')

            
        })




        const actualizarState=e=>
        {
            guardarPeriodo(
                {
                    ...periodo,[e.target.name]:e.target.value
                })


        }





        const enviarPeriodo=e=>
        {
          e.preventDefault();
          
          
          console.log(periodo.inicio);
          console.log(periodo.fin);
          var prueba=[periodo.inicio,periodo.fin]

          localStorage.setItem("periodo",prueba);
          props.history.push({
            pathname: '/',
            state: { periodo: periodo }
          })






        }

    return(
        <div className="container">

            <form onSubmit={enviarPeriodo}>

          
              <div className="row">

                  <div className="col s12">  
                      <h1>
                          Seleccione periodo
                      </h1>

                  </div>

                 <div className="col s12">  
          
                        <DatePicker
                          value={periodo.inicio}
                          name="inicio"     
                          onChange={(newDate)=>
                              {
                                actualizarState(
                                    {
                                      target:
                                      {
                                          name:"inicio",
                                          value:moment(newDate).format('LL')


                                      }     

                                    })   
                                

                              }}
                    id="DatePicker-5"
                    options={{
                      autoClose: false,
                      container: null,
                      defaultDate: null,
                      disableDayFn: null,
                      disableWeekends: false,
                      events: [],
                      firstDay: 0,
                      format: 'mmm dd, yyyy',
                      i18n: {
                        cancel: 'Cancel',
                        clear: 'Clear',
                        done: 'Ok',
                        months: [
                          'January',
                          'February',
                          'March',
                          'April',
                          'May',
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
                        ],
                        nextMonth: '›',
                        previousMonth: '‹',
                        weekdays: [
                          'Sunday',
                          'Monday',
                          'Tuesday',
                          'Wednesday',
                          'Thursday',
                          'Friday',
                          'Saturday'
                        ],
                        weekdaysAbbrev: [
                          'S',
                          'M',
                          'T',
                          'W',
                          'T',
                          'F',
                          'S'
                        ],
                        weekdaysShort: [
                          'Sun',
                          'Mon',
                          'Tue',
                          'Wed',
                          'Thu',
                          'Fri',
                          'Sat'
                        ]
                      },
                      isRTL: false,
                      maxDate: null,
                      minDate: null,
                      onClose: null,
                      onDraw: null,
                      onOpen: null,
                      onSelect: null,
                      parse: null,
                      setDefaultDate: false,
                      showClearBtn: false,
                      showDaysInNextAndPreviousMonths: false,
                      showMonthAfterYear: false,
                      yearRange: 10
                            }}
                        />
              </div>
                 <div className="col s12">  
            
                        <DatePicker
                  id="DatePicker-5"

                  value={periodo.fin}
                  name="fin"     
                  onChange={(newDate)=>
                      {
                      actualizarState(
                          {
                              target:
                              {
                                  name:"fin",
                                  value:moment(newDate).format('LL')


                              }     

                          })   
                        

                      }}
                  options={{
                    autoClose: false,
                    container: null,
                    defaultDate: null,
                    disableDayFn: null,
                    disableWeekends: false,
                    events: [],
                    firstDay: 0,
                    format: 'mmm dd, yyyy',
                    i18n: {
                      cancel: 'Cancel',
                      clear: 'Clear',
                      done: 'Ok',
                      months: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
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
                      ],
                      nextMonth: '›',
                      previousMonth: '‹',
                      weekdays: [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday'
                      ],
                      weekdaysAbbrev: [
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S'
                      ],
                      weekdaysShort: [
                        'Sun',
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat'
                      ]
                    },
                    isRTL: false,
                    maxDate: null,
                    minDate: null,
                    onClose: null,
                    onDraw: null,
                    onOpen: null,
                    onSelect: null,
                    parse: null,
                    setDefaultDate: false,
                    showClearBtn: false,
                    showDaysInNextAndPreviousMonths: false,
                    showMonthAfterYear: false,
                    yearRange: 10
                  }}
                  />

              </div>

              <div className="col s12">

              <Button type="submit" className="red">
                              <Icon left>
                                  save
                              </Icon>
                                  Ingresar 
                              </Button>

              </div>

              </div>

            </form>
        </div>  


    )
}

export default Calendario;