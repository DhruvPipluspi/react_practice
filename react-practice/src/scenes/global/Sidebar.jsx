import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import "react-pro-sidebar/dist/css/styles.css";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import PieChartOutlineTwoToneIcon from '@mui/icons-material/PieChartOutlineTwoTone';
import TimelineTwoToneIcon from '@mui/icons-material/TimelineTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <MenuItem 
            active={selected === title}
            style={{color: colors.grey[100]}} 
            onClick={() => setSelected(title)}
            icon={icon}
        >
        <Typography>{title}</Typography>
        <Link to={to}/>
        </MenuItem>
    )
}


const SideMenu = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: `transparent !important`,
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
            
                "& .pro-menu-item.hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuTwoToneIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                          >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    PI Connect
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuTwoToneIcon />
                                </IconButton>
                            </Box>
                        )}

                    </MenuItem>

                    {/* MenuTwoToneIcon */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h5"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >Dhruv Vaghasiya</Typography>
                                <Typography variant="h6" color={colors.greenAccent[500]}>Admin Portal</Typography>
                            </Box>
                        </Box>
                    )

                    }

                    <Box paddingLeft={isCollapsed ? undefined:'10%'}>
                    <Item title="Dashboard"
                        to = "/"                    
                        icon = {<HomeOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                    >Data</Typography>
                    <Item title="Manage Team"
                        to = "/team"                    
                        icon = {<PeopleOutlineOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item title="Contacts Information"
                        to = "/contacts"
                        icon = {<ContactsOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item title="Invoices Balances"
                        to = "/invoices"                    
                        icon = {<ReceiptOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                      <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                    >Pages</Typography>
                    <Item title="Profile Form"
                        to = "/form"                    
                        icon = {<PersonOutlineOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item title="Calendar"
                        to = "/calendar"                    
                        icon = {<CalendarTodayTwoToneIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item title="FAQ Page"
                        to = "/faq"                    
                        icon = {<HelpOutlineTwoToneIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                    >Charts</Typography>
                    <Item title="Bar Chart"
                        to = "/bar"                    
                        icon = {<BarChartTwoToneIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item title="Pie Chart"
                        to = "/pie"                    
                        icon = {<PieChartOutlineTwoToneIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item title="Line Chart"
                        to = "/line"                    
                        icon = {<TimelineTwoToneIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item title="Geography Chart"
                        to = "/geography"                    
                        icon = {<MapTwoToneIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    </Box>

                </Menu>
            </ProSidebar>

        </Box>
    )
};

export default SideMenu