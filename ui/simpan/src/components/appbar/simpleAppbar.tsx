import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


interface SimpleAppBarProps {
    position?: "static" | "fixed" | "absolute" | "sticky";
    children?: React.ReactNode;
}


export default function SimpleAppBar({ position, children }: SimpleAppBarProps) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position={position}>
                <Toolbar>
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
    );
    
}