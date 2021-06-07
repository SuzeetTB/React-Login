import React, { useState } from 'react';
import { Grid,Paper,Avatar,TextField,Checkbox,FormControlLabel,Button,Typography,Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    const ValidationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
          .required("This field is required")
          .min(2, "must be of 8 character")
          .max(20, "too long")
          .required("Required"),
    });

    const formik = useFormik({
        
        initialValues: {
          email: '',
          password:'',
          remember:false
        },
        validationSchema: ValidationSchema,
        onSubmit: async (values) => {
            debugger
            console.log(values);
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <Grid>
            <Paper 
                elevation={10}
                style = {{
                    padding:20,
                    height:'70vh',
                    width:350,
                    margin:"40px auto"
                }}
                >
                <Grid align = 'center'>
                    <Avatar style={{backgroundColor:'#3f51b5'}}><LockOutlinedIcon /></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <form onSubmit={formik.handleSubmit}>
                    <TextField fullWidth required label='Email ID' placeholder = 'hello@blabla.com'  {...formik.getFieldProps("email")}/>
                    <div style={{display:'flex', marginTop:10}}>
                    <TextField fullWidth required label='Password' placehorder = 'Enter Password' type = {passwordShown ? "text" : "password"} {...formik.getFieldProps("password")}/>
                    {passwordShown ? 
                        (<VisibilityOutlinedIcon onClick={togglePasswordVisiblity} className="password-toggle"/>) 
                        : (<VisibilityOffOutlinedIcon onClick={togglePasswordVisiblity} className="password-toggle"/>)}
                    </div>
                    <FormControlLabel control = {<Checkbox name="remember" color="primary"/>} label="Remember Me" {...formik.getFieldProps("remember")}/>
                    <Button type='submit' color='primary' variant='contained' fullWidth style={{margin:'28px 0'}}>Log In</Button>
                </form>
                <Typography>
                    <Link href="#">
                        Forgot Password?
                    </Link>
                </Typography>
                <Typography>Don't have an account? 
                    <Link href="/register">
                        Register!
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
