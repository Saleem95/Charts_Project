


// import { useEffect, useState } from 'react';
// import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// ChartJs.register(
//   Tooltip, Title, ArcElement, Legend
// );


// const data = {
//     datasets: [{
//         data: [10, 50, 100],
//         backgroundColor:[
//           'red',
//           'blue',
//           'yellow'
//         ]
//     },
//   ],
//   // These labels appear in the legend and in the tooltips when hovering different arcs
//   labels: [
//       'Red',
//       'Yellow',
//       'Blue'
//   ], 
// };
// function PieChart() {
//   const [data, setData] = useState({
//     datasets: [{
//         data: [10, 50, 100],
//         backgroundColor:[
//           'red',
//           'blue',
//           'yellow'
//         ]
//     },
//   ],
//   labels: [
//       'Red',
//       'Yellow',
//       'Blue'
//   ], 
// });
//   useEffect(()=> {
//     const fetchData = () =>  {
//         // https://jsonplaceholder.typicode.com/users
//         // http://localhost:5000/api/dashboard/items
//       fetch('http://localhost:5000/api/dashboard/items').then((data) => {
//         const res = data.json();
//         return res
//       }).then((res) => {
//         console.log("resss", res)
//         const label = [];
//         const data = [];
//         for(var i of res) {
//             label.push(i.topic);
//             data.push(i.id)
//         }
//         setData(
//           {
//             datasets: [{
//                 data:data,
//                 backgroundColor:[
//                   'red',
//                   'blue',
//                   'yellow'
//                 ]
//             },
//           ],
//           labels:label, 
//         }
//         )

//       }).catch(e => {
//         console.log("error", e)
//       }) 
//     }
//   fetchData();
//   }, [])
//   return (
//     <div className="App" style={{width:'30%', height:'30%'}}>
//       <Pie data={data}/>
//     </div>
//   );
// }

// export default PieChart;

////new






// import React from 'react';
// import { useEffect, useState } from 'react';
// import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// ChartJs.register(
//   Tooltip, Title, ArcElement, Legend
// );



// const PieChart = () => {
//       const [data, setData] = useState([]);
//       const [count, setCount] = useState(0)

// //   const data = [
// //     {
// //       _id: "6541f9d8b248cb3fec130046",
// //       intensity: "6",
// //       sector: "Energy",
// //     },
// //     {
// //       _id: "6541f9d8b248cb3fec130047",
// //       intensity: "6",
// //       sector: "Energy",
// //     },
// //     {
// //       _id: "6541f9d8b248cb3fec130048",
// //       intensity: "6",
// //       sector: "gas",
// //     },
// //     {
// //       _id: "6541f9d8b248cb3fec130049",
// //       intensity: "6",
// //       sector: "Environment",
// //     },
// //   ];
// useEffect(()=> {
//         const fetchData = () =>  {
//             // https://jsonplaceholder.typicode.com/users
//           fetch('http://localhost:5000/api/dashboard/items').then((data) => {
//             const res = data.json();
//             return res
//           }).then((res) => {
//             console.log("resss", res)
//             let result = [];
//             for (let i=0 ;i<res.length; i++){
//                 if(!result[res[i].sector]){
//                     result.push({
//                         label : res[i].sector
//                         , value : parseInt(res[i].intensity)
//                         })
//                         }else{
//                             let index = result.findIndex(obj => obj.label === res[i].sector );
//                             result[index].value +=parseInt(res[i].intensity)
//                             }
//                             }
//                             setData(result)
//                             }).catch(e => {
//                                 console.log("error", e)
//                               })
//                             };
//                             fetchData()},[])
                           






  
// //   const createPieChartData = (data) => {
// //     const sectorCounts = {};
  
// //     data.forEach((item) => {
// //       if (item.sector in sectorCounts) {
// //         sectorCounts[item.sector]++;
// //       } else {
// //         sectorCounts[item.sector] = 1;
// //       }
// //     });
  
// //     const sectors = Object.keys(sectorCounts);
// //     const counts = sectors.map((sector) => sectorCounts[sector]);
  
// //     return {
// //       labels: sectors,
// //       datasets: [
// //         {
// //           data: counts,
// //           backgroundColor: [
// //             'rgba(255, 99, 132, 0.6)',
// //             'rgba(54, 162, 235, 0.6)',
// //             'rgba(255, 206, 86, 0.6)',
// //             'rgba(75, 192, 192, 0.6)',
// //           ],
// //         },
// //       ],
// //     };
// //   };

//   return (
//     <div>
//       <h2>Pie Chart</h2>
//       <Pie data={data} />
//     </div>
//   );
// };

// export default PieChart;













// import { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';

// function PieChart() {
//   const [chartData, setChartData] = useState({
//     datasets: [{
//       data: [10, 50, 100],
//       backgroundColor: ['red', 'blue', 'yellow', 'tomato', 'LimeGreen', 'Gold', 'Indigo', 'DeepPink', 'black'],
//     }],
//     labels: ['red', 'blue', 'yellow', 'tomato', 'LimeGreen', 'Gold', 'Indigo', 'DeepPink', 'black'],
//   });

//   useEffect(() => {
//     const fetchData = () => {
//       fetch('http://localhost:5000/api/dashboard/items')
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("Data from API:", data);
//           const uniqueData = {}; // Use an object to filter out duplicates

//           data.forEach((item) => {
//             uniqueData[item.topic] = (uniqueData[item.topic] || 0) + 1;
//           });

//           const labels = Object.keys(uniqueData);
//           const chartData = Object.values(uniqueData);

//           setChartData({
//             datasets: [
//               {
//                 data: chartData,
//                 backgroundColor: ['red', 'blue', 'yellow', 'tomato', 'LimeGreen', 'Gold', 'Indigo', 'DeepPink', 'black'], // You can customize the colors here
//               },
//             ],
//             labels: labels,
//           });
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App" style={{ width: '50%', height: '50%' }}>
//       <Pie data={chartData} />
//     </div>
//   );
// }

// export default PieChart;

