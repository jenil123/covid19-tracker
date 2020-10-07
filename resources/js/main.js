// SELECT ALL ELEMENTS
const state_name_element = document.querySelector(".state .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");


const ctx = document.getElementById("axes_line_chart").getContext("2d");
//const ctx1 = document.getElementById("pie_chart").getContext("2d");bu
let button=document.getElementById("line-chart")
let button1=document.getElementById("bar-chart")
document.getElementById("line-chart").addEventListener("click", axesLinearChart);
document.getElementById("bar-chart").addEventListener("click", piechart);

let graphValue=document.getElementById("slidecontainer")
let app_data = [],
  cases_list = [],
  recovered_list = [],
  deaths_list = [],
  deaths = [],
  formatedDates = [];
// const fetch = require("node-fetch");

  
// GET USERS COUNTRY CODE
let country_code = geoplugin_countryCode();
let user_state;
state_list.forEach((state) => {
  if (state.code == country_code) {
    user_state = state.name;
  }
});
console.log(user_state)
/* ---------------------------------------------- */
/*                     FETCH API                  */
/* ---------------------------------------------- */
// const express=require('express')

let my_chart;
let my_pie;
// app=express()
function fetchData(state) {
    user_state = state;
    state_name_element.innerHTML="LOADING..."
    console.log(user_state);
    // state_name_element.innerHTML = "Loading...";
  
    (cases_list = []),
      (recovered_list = []),
      (deaths_list = []),
      (active_list=[]),
      (dates = []),
      (formatedDates = []);
  
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    if(my_pie)
    {
      my_pie.destroy();
    }
    if(my_chart)
    {
      my_chart.destroy();
    }
    const api_fetch = async () => {
      //document.getElementById('stats').style.visibility = 'hidden'; 
      // document.getElementById('latest-report').style.visibility = 'hidden'; 
      document.getElementById('state').style.visibility = 'hidden'; 
      document.getElementById('name').style.visibility = 'hidden'; 
      document.getElementById('change-state').style.visibility = 'hidden'; 
      document.getElementById('search-state').style.visibility = 'hidden'; 
      document.getElementById('search-box').style.visibility = 'hidden'; 
      document.getElementById('close').style.visibility = 'hidden'; 
      document.getElementById('state-list').style.visibility = 'hidden'; 
      document.getElementById('title').style.visibility = 'hidden'; 
      document.getElementById('value').style.visibility = 'hidden'; 
      document.getElementById('new-value').style.visibility = 'hidden'; 
      document.getElementById('recovered').style.visibility = 'hidden'; 
      document.getElementById('deaths').style.visibility = 'hidden';
      document.getElementById('line-chart').style.visibility='hidden';
      document.getElementById('bar-chart').style.visibility='hidden';
      document.getElementById("slidecontainer").style.visibility='hidden'
      document.getElementById("loader").style.display='initial'
        await fetch(
          "https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1",
          requestOptions
        )
        .then((res) => {
          // location.replace('loading.html')
            console.log(res.status)

            // data1.push(res.json())
             
              return res.json()
            
          })
          .then((data) => {
            document.getElementById("loader").style.display='none'
            // document.getElementById('stats').style.visibility = 'visible'; 
            // document.getElementById('latest-report').style.visibility = 'visible'; 
            document.getElementById('state').style.visibility = 'visible'; 
            document.getElementById('name').style.visibility = 'visible'; 
            document.getElementById('change-state').style.visibility = 'visible'; 
            document.getElementById('search-state').style.visibility = 'visible'; 
            document.getElementById('search-box').style.visibility = 'visible'; 
            document.getElementById('close').style.visibility = 'visible'; 
            document.getElementById('state-list').style.visibility = 'visible'; 
            document.getElementById('title').style.visibility = 'visible'; 
            document.getElementById('value').style.visibility = 'visible'; 
            document.getElementById('new-value').style.visibility = 'visible'; 
            document.getElementById('recovered').style.visibility = 'visible'; 
            document.getElementById('deaths').style.visibility = 'visible ';
            document.getElementById('line-chart').style.visibility='visible';
            document.getElementById('bar-chart').style.visibility='visible';
            document.getElementById("slidecontainer").style.visibility='visible'
            var rec=0;
                var death=0,active=0;
                var total=0
                
            // data = JSON.parse(JSON.stringify(data));
            
            if(user_state==="India")
            {
              var rec=0;
                    var death=0,active=0;
                    var totalnew=0
                    var total=0;
                    var r=0,d=0,a=0;
                data.forEach((entry)=>{
                  console.log(entry.lastUpdatedAtApify)
                  dates.push(entry['lastUpdatedAtApify']);
                    active=parseInt(entry.activeCases);
                    death=parseInt(entry.deaths);
                    rec=parseInt(entry.recovered);
                    total=active+death+rec;
                    console.log(total)
                    if(isNaN(total) )
                    {
                    //   let avg= cases_list.reduce((acc, c) => acc + c, 0);
                    //    avg=avg / cases_list.length;
                       
                    //   cases_list.push(avg);
                    //   console.log("avg")
                    //   console.log(avg)
                    //   avg= recovered_list.reduce((acc, c) => acc + c, 0);
                    //    avg=avg / cases_list.length;
                       
                    // recovered_list.push(avg);
                    // avg= deaths_list.reduce((acc, c) => acc + c, 0);
                    //    avg=avg / cases_list.length;
                     
                    // deaths_list.push(avg);
                    // avg= active_list.reduce((acc, c) => acc + c, 0);
                    //    avg=avg / cases_list.length;
                     
                    // active_list.push(avg);
                    cases_list.push(cases_list[cases_list.length-1]);
                      recovered_list.push(recovered_list[recovered_list.length-1]);
                      deaths_list.push(deaths_list[deaths_list.length-1]);
                      active_list.push(active_list[active_list.length-1]);
                    }
                    else
                    {
                      console.log(total);
                    //console.log(death);
                    cases_list.push(total);
                    recovered_list.push(rec);
                    deaths_list.push(death);
                    active_list.push(active);
                    }
                    //console.log(active);
                    //console.log(rec);
                    
                })
                
                // var a=0,d=0,r=0;
                // var totalnew=0;
                updateUI(dates);
            }
            else{
              var rec=0;
                    var death=0,active=0;
                    var totalnew=0
                    var total=0;
                    var r=0,d=0,a=0;
            data.forEach((datas) => {
              {
                console.log(datas.hasOwnProperty('regionData'))
                if(datas.hasOwnProperty('regionData'))
                {
                  // console.log(datas);
                  console.log(datas.lastUpdatedAtApify)
                    dates.push(datas.lastUpdatedAtApify);
                  datas['regionData'].forEach((entry)=>{
                    
                    if(entry.region===user_state)
                    {
                    
                      
                      a=parseInt(entry.totalInfected);
                      d=parseInt(entry.deceased);
                      r=parseInt(entry.recovered);
                      totalnew=a+d+r;
                      console.log(totalnew)
                      if(isNaN(totalnew))
                    {
                    //   let avg= cases_list.reduce((acc, c) => acc + c, 0);
                    //    avg=avg / cases_list.length;
                       
                    //   cases_list.push(avg);
                    //   console.log("avg")
                    //   console.log(avg)
                    //   avg= recovered_list.reduce((acc, c) => acc + c, 0);
                    //    avg=avg / cases_list.length;
                       
                    // recovered_list.push(avg);
                    // avg= deaths_list.reduce((acc, c) => acc + c, 0);
                    //    avg=avg / cases_list.length;
                     
                    // deaths_list.push(avg);
                    // avg= active_list.reduce((acc, c) => acc + c, 0);
                    //    avg=avg / cases_list.length;
                     
                    // active_list.push(avg);
                   
                      cases_list.push(cases_list[cases_list.length-1]);
                      recovered_list.push(recovered_list[recovered_list.length-1]);
                      deaths_list.push(deaths_list[deaths_list.length-1]);
                      active_list.push(active_list[active_list.length-1]);
                    }
                      else{
                        console.log(totalnew)
                      cases_list.push(totalnew);
                      recovered_list.push(r);
                      deaths_list.push(d);
                      active_list.push(a);
                      }
                      
                     }
                   })
                  
                }
              }
              
                //console.log(entry)
              //recovered_list.push(entry.Cases);
            });
            updateUI(dates);

            //console.log(data)
          }
          });
          
       
        
}
api_fetch();
}

fetchData(user_state)

let inputValue=document.getElementById("myRange")
function updateUI(dates) {
    updateStats(dates);
    button.addEventListener("click",(e)=>{
     // e.preventDefault()
      var value=inputValue.value;
      console.log(value)
      axesLinearChart(value);
      return false;
    })
    button1.addEventListener("click",(e)=>{
     // e.preventDefault();
      var value=inputValue.value;
      piechart(value); 
      return false; 
    })
    
  }

  function updateStats(dates) {
    
    const total_cases = cases_list[cases_list.length-1];
    const new_confirmed_cases = total_cases - cases_list[cases_list.length - 2];
  
    const total_recovered = recovered_list[recovered_list.length-1];

    const new_recovered_cases =
      total_recovered - recovered_list[recovered_list.length - 2];
  
    const total_deaths = deaths_list[deaths_list.length-1];
    const new_deaths_cases = total_deaths - deaths_list[deaths_list.length - 2];


    console.log(new_confirmed_cases)
    console.log(new_recovered_cases)
    console.log(new_deaths_cases)
    state_name_element.innerHTML = user_state;
    total_cases_element.innerHTML = total_cases;
    new_cases_element.innerHTML = '+' + new_confirmed_cases;
    recovered_element.innerHTML = total_recovered;
    new_recovered_element.innerHTML = '+' + new_recovered_cases;
    deaths_element.innerHTML = total_deaths;
    new_deaths_element.innerHTML = '+' + new_deaths_cases;


    
    dates.forEach((date) => {
        formatedDates.push(formatDate(date));
      });


  }


  // UPDATE CHART

function axesLinearChart(value) {
  console.log(formatedDates)
  if (my_chart) {
    my_chart.destroy();
  }
  if(my_pie)
  {
    my_pie.destroy();
  }
  formatedDates = [...new Set(formatedDates)];
 
  a = [...new Set(cases_list)];

  b = [...new Set(recovered_list)];
  
  c = [...new Set(deaths_list)];
  // d=[]
  // d = [...new Set(deaths_list)];
  my_chart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Total Cases",
          data: a.slice(a.length-value,a.length),
          fill: false,
          borderColor: "red",
          backgroundColor: "red",
          borderWidth: 1,
        },
        {
          label: "Recovered",
          data: b.slice(b.length-value,b.length),
          fill: false,
          borderColor: "darkblue",
          backgroundColor: "darkblue",
          borderWidth: 1,
        },
        {
          label: "Deaths",
          data: c.slice(c.length-value,c.length),
          fill: false,
          borderColor: "orange",
          backgroundColor: "orange",
          borderWidth: 1,
        },
      ],
      labels: formatedDates.slice(formatedDates.length-value,formatedDates.length),
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      responsiveAnimationDuration:1,
    },
  });
  inputValue.oninput = function(e) {
    
    axesLinearChart(this.value)
    return false;
  }
}
function piechart(value) {
  formatedDates = [...new Set(formatedDates)];
  console.log(formatedDates)
  if (my_chart) {
    my_chart.destroy();
  }
  if(my_pie)
  {
    my_pie.destroy();
  }
  formatedDates = [...new Set(formatedDates)];
 
  a = [...new Set(cases_list)];

  b = [...new Set(recovered_list)];
 
  c = [...new Set(deaths_list)];
  my_pie = new Chart(ctx, {
    type: "bar",
    data: {
      datasets: [
        {
          label: "Total Cases",
          data: a.slice(a.length-value,a.length),
          fill: false,
          borderColor: "red",
          backgroundColor: "red",
          borderWidth: 1,
        },
        {
          label: "Recovered",
          data: b.slice(b.length-value,b.length),
          fill: false,
          borderColor: "darkblue",
          backgroundColor: "darkblue",
          borderWidth: 1,
        },
        {
          label: "Deaths",
          data: c.slice(c.length-value,c.length),
          fill: false,
          borderColor: "orange",
          backgroundColor: "orange",
          borderWidth: 1,
        },
      ],
      labels: formatedDates.slice(formatedDates.length-value,formatedDates.length),
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      responsiveAnimationDuration:3,
    },
  });
  inputValue.oninput = function(e) {
    
    piechart(this.value)
    return false;
  }
}

// FORMAT DATES
const monthsNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(dateString) {
  let date = new Date(dateString);

  return `${date.getDate()} ${monthsNames[date.getMonth() - 1]}`;
}
