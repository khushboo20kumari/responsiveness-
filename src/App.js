
// import './App.css';

// import RightSidebar from './RightSideBar';
// import LeftSidebar from './LeftSideBar';
// import MainContent from './MainContent';
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Navbar from './Navbar';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// function App() {
//   return (
//     <div className="App">
//       <Box>khdfdh</Box>
//       <Box sx={{ width: '100%' }}>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//           <Grid item xs={12} sm={12} md={3} lg={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
//             <LeftSidebar />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={8}>
//             <MainContent />
//           </Grid>
//           <Grid item xs={12} sm={12} md={3} lg={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
//             <RightSidebar />
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// }

// export default App;
// // 




// import './App.css';
// import Navbar from './Navbar';
// import RightSidebar from './RightSideBar';
// import LeftSidebar from './LeftSideBar';
// import MainContent from './MainContent';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// function App() {
//   return (
//     <div className="App">
       
//       <Box sx={{ width: '100%' }}>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//           <Grid item xs={12} sm={12} md={3} lg={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
//             <LeftSidebar />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={8}>
//             <MainContent />
//           </Grid>
//           <Grid item xs={12} sm={12} md={3} lg={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          
//             <RightSidebar />
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// }

// export default App;

import Main from "./Main";
function App(){
  return(
    <div className="App">
     
      <Main/>

    </div>
  )
}
export default App;



// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Item from './Item'; 
// import Box from '@mui/material/Box'; 
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   commonStyles: {
//     backgroundColor: '#f0f0f0',
//   },
//   circularImage: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '50%',
//     display: 'block',
//     margin: 'auto',
//   },
// }));

// const App = () => {
//   const classes = useStyles();

//   return (
//     <Grid item xs={12} sm={6} md={12} lg={2}>
//       <Item>
//         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Box sx={{ ...classes.commonStyles, borderRadius: '50%', width: '90%', height: '215px' }}>
//             <img className={classes.circularImage} src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/50/54/91/sBOSxKBrTS6GAy8GUlXw_meatballs%2520(2%2520of%25204).jpg' alt="Meatballs" />
//           </Box>
//         </Box>
//       </Item>
//     </Grid>
//   );
// };

// export default App;



// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import { makeStyles } from '@mui/system';

// const useStyles = makeStyles((theme) => ({
//   commonStyles: {
//     backgroundColor: '#f0f0f0',
//   },
//   circularImage: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '50%',
//     display: 'block',
//     margin: 'auto',
//   },
// }));

// const App= () => {
//   const classes = useStyles();

//   return (
//     <Grid item xs={12} sm={6} md={12} lg={2}>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Box sx={{ ...classes.commonStyles, borderRadius: '50%', width: '90%', height: '215px' }}>
//           <img
//             className={classes.circularImage}
//             src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/50/54/91/sBOSxKBrTS6GAy8GUlXw_meatballs%2520(2%2520of%25204).jpg'
//             alt="Meatballs"
//           />
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// export default App;
