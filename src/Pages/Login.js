import React, { Component } from "react";
import { Container, Box, Typography, TextField, CircularProgress, Button } from "@material-ui/core";
import logo from "../media/logo.png";

import { saveAuthToken, isAuthenticated } from "../utils/common";
import { Redirect } from "react-router-dom";

class Login extends Component {
 constructor(props) {
     super(props);
     this.state = {
         email: "",
         password: "",
         showProgress: false,
         validCredentialMsg: "",
         password_error: null,
         email_error: null,
     }
 }

 handleChange = (e) => {
     this.setState({
         [e.target.name]: e.target.value
     })
 }

 login = () => {
     let valid = true;
     if(this.state.email===""){
         const email_error = "Please fill email";
         this.setState({
            email_error
        });
         valid = false
     }

     if(this.state.password===""){
        const password_error = "Please fill email";
        this.setState({
            password_error
        });
        valid = false
    }
    this.setState({
        update: true
    });
    if(valid) {
        this.setState({
            showProgress: true,
            password_error: null,
            email_error: null
        });
        if(this.state.email=="admin" && this.state.password=="123456"){
            this.setState({
                showProgress: true,
            });
            saveAuthToken("djhgdgdada");
            this.props.history.replace('/');
        } else {
            const validCredentialMsg = "Please enter valid credentials";
            this.setState({
                validCredentialMsg,
                showProgress: false
            });
        }
        
    }
 }

    render() {
        if(isAuthenticated()){
            return <Redirect to="/" />
        }
        return (
        <Container maxWidth="xs">
            <Box bgcolor="white" boxShadow="2" borderRadius="10px" textAlign="center" p="24px" mt="50px">
                <img src={logo} height="100px" />
                <Typography variant="h5" color="textSecondary">ADMIN</Typography>
                <TextField
                    label="Email"
                    id="outlined-size-small"
                    defaultValue=""
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    error={this.state.email_error != null}
                    helperText={this.state.email_error}
                    onChange={this.handleChange}
                    margin="normal"
                    color="secondary"
                    size="small"
                />
                <TextField
                    label="Password"
                    id="outlined-size-small"
                    defaultValue=""
                    variant="outlined"
                    type="password"
                    name="password"
                    error={this.state.password_error != null}
                    helperText={this.state.password_error}
                    onChange={this.handleChange}
                    fullWidth
                    color="secondary"
                    margin="normal"
                    size="small"
                />
               {this.state.showProgress && <CircularProgress size={24} />}
                <Button variant="contained" onClick={this.login} size="medium" color="primary" fullWidth>
                    Login
                </Button>
        <Typography variant="p" margin="normal" color="primary">{this.state.validCredentialMsg}</Typography>
            </Box>
        </Container>
        )
    }
}

export default Login;