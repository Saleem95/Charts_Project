import * as React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchBar from './Search';


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment >
      <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.topic}
        </TableCell>
        <TableCell align="left" component="th" scope="row">{row.start_year}</TableCell>
        <TableCell align="left" component="th" scope="row">{row.end_year}</TableCell> 
        <TableCell align="left" component="th" scope="row">{row.pestle}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                    More Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>start_year</TableCell>
                    <TableCell>added</TableCell>
                    <TableCell align="left">published</TableCell>
                    <TableCell align="left">URL</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={row._id}>
                      <TableCell component="th" scope="row">
                        {row.start_year}
                      </TableCell>
                      <TableCell>{row.added}</TableCell>
                      <TableCell align="left">{row.published}</TableCell>
                     <TableCell align="left"><a href={row.url}>{row.url} </a>  </TableCell> 
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TableData() {
    const [items, setItems] = useState([]);
    const [filteredData, setFilteredData] = useState(items);

    // const navigate = useNavigate();
    useEffect(() => {
        getdata();
    
      }, []);
    
      //get data
      async function getdata() {
        try {
          const item = await axios.get(`http://localhost:5000/api/dashboard/items`)
          console.log(item.data);
          return setItems(item.data)
          // setFilteredData(item.data)
        } catch (error) {
          console.log("Something is Wrong");
        }
      }
      // console.log(items);

      const handleSearch = (searchValue) => {
        const filtered = items.filter((item) => {
          return (
            item.topic.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.country.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
    
        setFilteredData(filtered);
      };
  return (
    <>
    <h1>Table Data</h1>

    <TableContainer component={Paper}>
    <SearchBar handleSearch= {handleSearch} />

      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Topic</TableCell>
            <TableCell align="left">Sector</TableCell>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">Source</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((val) => (
            <>
            <Row key={val._id} row={val} />
          </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import {useEffect, useState} from 'react'
// import axios from 'axios'

// const headeritems = [
//   { id: 'topic', label: 'Topic', minWidth: 170 },
//   { id: 'sector', label: 'Sector', minWidth: 100 },
//   {
//     id: 'country',
//     label: 'Country',
//     minWidth: 170,
//     align: 'left',
//   },
//   {
//     id: 'start_year',
//     label: 'Start_year',
//     minWidth: 170,
//     align: 'left',
//   },
//   // {
//   //   id: 'density',
//   //   label: 'Density',
//   //   minWidth: 170,
//   //   align: 'right',
//   //   format: (value) => value.toFixed(2),
//   // },
// ];



// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [items, setItems] = useState([]);
//       // const [filteredData, setFilteredData] = useState(items);
  
//       function createData(topic, sector, country, start_year) {
//         // const density = population / size;
//         return {topic, sector, country, start_year};
//       }
      
//       const rows = [
//         createData()
//       ];
//       // const navigate = useNavigate();
//       useEffect(() => {
//                 getdata()
      
//         }, []);
      
//         //get data
//         async function getdata() {
//           try {
//             const item = await axios.get(`http://localhost:5000/api/dashboard/items`)
//             console.log(item.data);
//             return setItems(item.data)
//             // setFilteredData(item.data)
//           } catch (error) {
//             console.log("Something is Wrong");
//           }
//         }
//         // console.log(items);
  

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {headeritems.map((item) => (
//                 <TableCell
//                   key={item.id}
//                   align={item.align}
//                   style={{ minWidth: item.minWidth }}
//                 >
//                   {item.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {items
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {items.map((item) => {
//                       // const value = row[item.id];
//                       return (
//                         <TableCell key={item._id} align={item.align}>
//                           {/* {item.format && typeof value === 'number'
//                             ? item.format(value)
//                             : value} */}
//                             {row[item.id]}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={items.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }
