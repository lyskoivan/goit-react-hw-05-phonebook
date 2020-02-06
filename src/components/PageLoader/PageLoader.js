import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './PageLoader.module.css';

const PageLoader = () => {
  return (
    <div className={styles.LoaderWrapper}>
      <Loader type="TailSpin" color="palevioletred" height={100} width={100} />
    </div>
  );
};

export default PageLoader;
