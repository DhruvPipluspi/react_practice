import {Box, Toolbar, useTheme} from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataContacts} from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field:"id", headerName:"ID"},
        {field:"registrarId", headerName:"RegisterID" },
        {
            field: "name",
            headerName: "Contact Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            flex: "number",
            headerAlign:"left",
            align:"left",
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
            field: "address",
            headerName: "Contact Address",
            flex: 1,
        },
        {
            field: "city",
            headerName: "Contact City",
            flex: 1,
        },
        {
            field: "zipCode",
            headerName: "Contact ZipCode",
            flex: 1,
        },
        
    ]
    return (
        <Box m="20px">
            <Header title="Contact Infromation" subtitle="Managing Your Contact Information" />
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
                rows={mockDataContacts}
                columns={columns}
                components={{Toolbar: GridToolbar}}
                // components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}
export default Contacts;