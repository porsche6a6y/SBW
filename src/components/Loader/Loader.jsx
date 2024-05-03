import React, { Component } from 'react';
import styles from './Loader.module.css'
const Loader = () => {
    return (
        <div className={styles.windows8}>
	<div className={styles.wBall} id={styles.wBall_1}>
		<div className={styles.wInnerBall}></div>
	</div>
	<div className={styles.wBall} id={styles.wBall_2}>
		<div className={styles.wInnerBall}></div>
	</div>
	<div className={styles.wBall}id={styles.wBall_3}>
		<div className={styles.wInnerBall}></div>
	</div>
	<div className={styles.wBall} id={styles.wBall_4}>
		<div className={styles.wInnerBall}></div>
	</div>
	<div className={styles.wBall} id={styles.wBall_5}>
		<div className={styles.wInnerBall}></div>
	</div>
    </div>
    );
};

export default Loader