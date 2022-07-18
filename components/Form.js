import styles from '../styles/Form.module.scss';

const Form = () => (
     <div className={styles.parent__container}>
            <div className={styles.container}>
                <h2 className={styles.container__title}>Book your vacation</h2>
                <form action='#'className={styles.booking}>
                    <img src='/home-line.png'/>
                    <div className={styles.address}>
                    <label>Accommodation</label>
                        <select id='select__address'>
                            <option value="value_1" selected>6730 Luna Land North Rhiannonmouth</option>
                            <option value="value_2">7 Hollie Ports South Charlesview SL7 3PB</option>
                            <option value="value_3">660 Wilkinson Point Harrisbury LA8 9RA</option>
                        </select>
                    </div>
                    <img src='/calendar-line.png'/>
                    <div className={styles.data_1}>
                        <label>Check-in</label>
                        <input type="date" id="start" name="trip-start" value="2019-06-19" min="2019-01-01" max="2024-12-31"></input>
                    </div>
                    <div className={styles.data_2}>
                        <label>Check-out</label>
                        <input type="date" id="end" name="trip-end" value="2019-06-19" min="2019-01-01" max="2024-12-31"></input>
                    </div>
                    <img src='/user.png'/>
                    <div className={styles.guests}>
                        <label>Guests</label>
                        <select id='select__guests'>
                            <option value="value_1" selected>4 adults</option>
                            <option value="value_2">4 adults with kids</option>
                            <option value="value_3">2 adults</option>
                            <option value="value_4">2 adults with kids</option>
                            <option value="value_5">1 adult</option>
                            <option value="value_6">1 adult with kids</option>
                        </select>
                    </div>
                    <button className={styles.btn}>Search</button>
                </form>
            </div>
     </div>
);

export default Form;