
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MainContent = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Item>
                    <img style={{ width: "100%" }} src='https://mui.com/static/images/image-list/breakfast.jpg'></img>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <img style={{ width: "100%" }} src='https://mui.com/static/images/image-list/breakfast.jpg'></img>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <img style={{ width: "100%" }} src='https://mui.com/static/images/image-list/breakfast.jpg'></img>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <img style={{ width: "100%" }} src='https://mui.com/static/images/image-list/breakfast.jpg'></img>
                   
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <img style={{ width: "100%" }} src='https://mui.com/static/images/image-list/breakfast.jpg'></img>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <img style={{ width: "100%" }} src='https://mui.com/static/images/image-list/breakfast.jpg'></img>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <img style={{ width: "100%" }} src='https://mui.com/static/images/image-list/breakfast.jpg'></img>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <img style={{ width: "100%" }} src='https://mui.com/static/images/image-list/breakfast.jpg'></img>
                   
                </Item>
            </Grid>
        </Grid>
    );
};

export default MainContent;

