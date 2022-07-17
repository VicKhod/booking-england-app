import styles from '../styles/Home.module.scss';

const Home = () => (
  <div className={styles.home}>

    <div className={styles.title}>
      <h1>Beautiful Places <br></br> of England</h1>
      <p>Plan your vacation on the most beatiful <br></br>places of England</p>
    </div>

    <div className={styles.card}>
      <div className={styles.card__text}>
        <p>Up next</p>
        <h2>Aerial View <br></br> of Rock <br></br>Cliffs</h2>
        <div className={styles.arrow}> 
          <img src='/vector.png'></img>
        </div>
      </div>

      <div className={styles.card__mountains}>
        <img src='/mountains.png'></img>
      </div>
    </div>

  </div>
);

export default Home;