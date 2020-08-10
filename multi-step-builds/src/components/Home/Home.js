import React, { useState } from 'react';
import styles from './Home.module.css'
import axios from 'axios';

const Home = () => {
  const [ time, setTime ] = useState('Time');

  const getTime = () => {
    // const url = 'http://localhost:5000/time';
    const url = '/api/time';

    axios.get(url)
      .then((res) => {
        console.log(res);
        setTime(res.data);
      })
  }

  return (
    <div className={styles.wrapper}>
      <div>{time}</div>
      <button onClick={getTime}>Get Date/Time</button>
    </div>
  )
}

export default Home;