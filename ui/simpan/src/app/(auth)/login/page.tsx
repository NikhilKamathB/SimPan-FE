import React from 'react';
import SimpleLogin from '../../components/login-form/simpleLogin';
import LoginHeader from './_base/header';
export default function LoginPage(): React.ReactElement {
    return (
        <>
            <LoginHeader />
            <SimpleLogin />
        </>
    );
}