import {Box, Toolbar, Typography, useTheme} from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataInvoices} from "../../data/mockData";
import Header from "../../components/Header";
import { alignProperty } from "@mui/material/styles/cssUtils";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        
        {field:"id", headerName:"ID " },
        {
            field: "name",
            headerName: "Invoice's Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
        },
        {
            field: "date",
            headerName: "Date",
            alignProperty:"center",
            flex: 1,
          
        },
        
    ]
    return (
        <Box m="20px">
            <Header title="Invoices" subtitle="Managing Your Invoices" />
            <Box m="40px 0 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root":{
                    border: "none",
                },
                "& .MuiDataGrid-cell":{
                    borderBottom:"none"
                },
                "& .name-column--cell":{
                    color: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeader":{
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer":{
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700]
                },
            }}>
                <DataGrid
                rows={mockDataInvoices}
                columns={columns}
                components={{Toolbar: GridToolbar}}
                // disableSelection 
                enableCellSelect={false}
                suppressRowClickSelection 
                rowsCount={mockDataInvoices.length}
                disableSelectionOnClick 
                disableRowSelectionOnClick
                />
            </Box>
        </Box>
    )
}
export default Invoices;