import React from 'react';
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { dark } from '@material-ui/core/styles/createPalette';
const CustomPagination = ({setPage, numOfPages=10}) => {

     const darkTheme =createMuiTheme({
         palette:{
             type:"dark",
         },
     });
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
      };
    return (
        <div
           style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
        >
        <ThemeProvider theme={darkTheme}>
         <Pagination 
         count={numOfPages}
         hideNextButton
         hidePrevButton
         color="primary"
         onChange={(e)=>handlePageChange(e.target.textContent)}/>
         </ThemeProvider>
        </div>
    )
}

export default CustomPagination;
