"use client";

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import CardHeader from '@mui/material/CardHeader';
import React, { useState, useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import styles from './simpleLogin.module.scss';

export default function SimpleLogin(): React.ReactElement {
    // This component is used to render a simple login form with email and password fields
    // Make use of useState to manage the email and password states
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isVisible, setIsVisible] = useState(false);
    // Set effect to set the visibility state to true upon loading
    useEffect(() => {
        setIsVisible(true);
    }, []);
    // Handle submit event
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email, password);
    }
    // Handle change email event
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        console.log(email);
    }
    // Handle change password event
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    // Render form
    return (
        <div className={styles.login_container}>
            <Card className={`${styles.login_card} ${isVisible ? styles.login_card_visible : styles.login_card_hidden}`}>
                <CardHeader
                    title="SimPan Login"
                    align="center"
                />
                <CardContent>
                    <FormGroup>
                        <TextField label="Email" value={email} onChange={handleChangeEmail} margin="normal" required/>
                        <TextField label="Password" value={password} onChange={handleChangePassword} margin="normal" type="password" required/>
                    </FormGroup>
                </CardContent>
                <CardActions >
                    <Button fullWidth variant="contained">Login</Button>
                </CardActions>
            </Card>
        </div>
    );
}
