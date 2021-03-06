import React from 'react';
import { NextComponentType, NextPageContext, GetServerSideProps } from 'next'
import LoginComponent from '../components/login/LoginComponent';
import { useRouter } from "next/router"
import styles from './login.module.scss';

const login: NextComponentType<NextPageContext, any> = () => {
    const router = useRouter();

    const handleSuccessLogin = () => {
        if (typeof router.query.redirectPath === 'string' && router.query.redirectPath !== '') {
            window.location.href = router.query.redirectPath
        } else {
            window.location.href = '/'
        }
    }

    const navigateToSignUp = () => {
        router.push('/signup')
    }

    return (
        <div className={styles.container}>
            <LoginComponent handleSuccessLogin={handleSuccessLogin} navigateToSignUp={navigateToSignUp}/>
        </div>
    );
}

export default login;
