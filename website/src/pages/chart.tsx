import React from 'react';
import { NextComponentType, NextPageContext, GetServerSideProps } from 'next'
import styles from './login.module.scss';
import dynamic from 'next/dynamic'

const StockChartComponent = dynamic(() =>
  import('../components/chart/StockChartComponent'),
  {ssr: false}
)


const login: NextComponentType<NextPageContext, any> = () => {

    return (
        <div className={styles.container}>
            <StockChartComponent />
        </div>
    );
}

export default login;