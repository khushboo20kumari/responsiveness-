import { Button, Grid, TextField, Typography } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Textarea from '@mui/joy/Textarea';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Form() {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ position: "relative", top: "100px"}} >
                <Grid item xs={12} lg={7} md={7} sm={12} style={{ margin: "auto" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <Item>
                        <Typography style={{ margin: "26px", fontWeight: "bold", fontSize: "30px" }}>Make An Appointment</Typography>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                            <Grid item xs={6} sm={6} lg={6} md={6} >
                                <TextField fullWidth></TextField>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6} >

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Age"
                                    >
                                        <MenuItem>Ten</MenuItem>
                                        <MenuItem>Twenty</MenuItem>
                                        <MenuItem>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']} >
                                        <DatePicker
                                            label="Basic date picker"
                                            sx={{ width: '100%' }}  
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={6} sm={6} lg={6} md={6} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['TimePicker']}>
                                        <TimePicker label="Basic time picker"  sx={{ width: '100%' }} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6} >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Age"
                                    >
                                        <MenuItem>Ten</MenuItem>
                                        <MenuItem>Twenty</MenuItem>
                                        <MenuItem>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6} >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']} >
                                        <DatePicker label="Basic date picker" sx={{ width: '100%' }} />
                                    </DemoContainer>
                                </LocalizationProvider>


                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6} >
                                <TextField fullWidth></TextField>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6} >
                                <TextField fullWidth></TextField>

                            </Grid>
                            <Grid item xs={6} lg={12} md={12}>
                                <Textarea
                                    placeholder="Type in here…"
                                    minRows={2}
                                    sx={{
                                        '&::before': {
                                            display: 'none',
                                        },
                                        '&:focus-within': {
                                            outline: '2px solid var(--Textarea-focusedHighlight)',
                                            outlineOffset: '2px',
                                        },
                                    }}
                                />

                            </Grid>
                            <Grid item sm={12} xs={12} lg={4} md={4}>
                                <Button variant="contained">Get Appointment</Button>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </>
    )
}
export default Form;