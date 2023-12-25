import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import AdbIcon from '@mui/icons-material/Adb';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <Box 
            sx={{
                width: "100%",
                height: "auto",
                bgcolor: "secondary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                marginTop: "38px",
               


            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <InstagramIcon />
                        <GoogleIcon />
                        < AdbIcon />
                        <TwitterIcon />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
