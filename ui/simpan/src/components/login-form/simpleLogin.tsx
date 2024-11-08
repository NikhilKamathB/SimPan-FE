"use client";

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import React, { useState, useEffect, useRef } from 'react';
import styles from './simpleLogin.module.scss';

export default function SimpleLogin(): React.ReactElement {

    // This component is used to render a simple login form with email and password fields

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email, password);
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        email.current!.value = event.target.value;
        console.log(email);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        password.current!.value = event.target.value;
        console.log(password);
    }

    return (
        <div className={styles.login_container}>
            <Card className={`${styles.login_card} ${isVisible ? styles.login_card_visible : styles.login_card_hidden}`}>
                <CardHeader
                    title="SimPan Login"
                    align="center"
                />
                <CardContent>
                    <FormGroup>
                        <TextField label="Email" value={email.current?.value} onChange={handleChangeEmail} margin="normal" ref={email} required/>
                        <TextField label="Password" value={password.current?.value} onChange={handleChangePassword} margin="normal" type="password" ref={password} required/>
                    </FormGroup>
                </CardContent>
                <CardActions >
                    <Button fullWidth variant="contained">Login</Button>
                </CardActions>
            </Card>
        </div>
    );
    
}
