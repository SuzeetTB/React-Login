import React from 'react';
import { 
Grid, Paper, Avatar, 
TextField, Checkbox, Radio, RadioGroup,
FormLabel,FormControlLabel, FormControl,
Button, Typography,} from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

export const Register = () => {
    return (
        <Grid>
            <Paper
                elevation={10}
                style={{
                    padding: 20,
                    height: '80vh',
                    width: 300,
                    margin: "40px auto"
                }}
            >
                <Grid align='center'>
                    <Avatar style={{backgroundColor:'#3f51b5'}}><PersonAddOutlinedIcon /></Avatar>
                    <h3>Register User</h3>
                    <Typography variant='caption' gutterBottom>Please fill up the form to create an account!</Typography>
                </Grid>
                <form action="" method="post">
                    <TextField fullWidth required label='Name' placeholder='Ram Shrestha' />
                    <TextField fullWidth required label='Email ID' placeholder='hello@blabla.com'/>
                    <TextField fullWidth required label='Phone Number' placeholder='+977 9860487773'/>
                    <FormControl style={{marginTop:5}}>
                        <FormLabel>Gender : </FormLabel>
                        <RadioGroup style={{display:'initial'}}>
                            <FormControlLabel value='male' control={<Radio />}label="Male"/>
                            <FormControlLabel value='female' control={<Radio />}label="Female"/>
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth required label='Password' placeholder='Enter a Password' type='password'/>
                    <TextField fullWidth required label='Confirm Password' placeholder='Enter the same password' type='password'/>
                    <FormControlLabel
                        control={
                            <Checkbox name="rememberME" color="primary" />
                        }
                        label="Accept terms & conditions"
                    />
                    <Button type='submit' color='primary' variant='contained' fullWidth style={{ margin: '18px 0' }}>Register</Button>
                </form>
            </Paper>
        </Grid>
    )
}
