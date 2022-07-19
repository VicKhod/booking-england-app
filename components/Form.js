import styles from "../styles/Form.module.scss";
import "../styles/Form-media.module.scss";

const Form = () => (
  <div className={styles.parent__container}>
    <div className={styles.container}>
      <h2 className={styles.container__title}>Book your vacation</h2>

        <form action="#" className={styles.booking}>

            <div className={styles.address+ ' ' + styles.cell}>
                <img src="/home-line.png" />
                <div class={styles.form_input_wrap}>
                    <label>Accommodation</label>
                    <select id="select__address">
                        <option defaultValue="value_1">
                        6730 Luna Land North Rhiannonmouth
                        </option>
                        <option defaultValue="value_2">
                        7 Hollie Ports South Charlesview SL7 3PB
                        </option>
                        <option defaultValue="value_3">
                        660 Wilkinson Point Harrisbury LA8 9RA
                        </option>
                    </select>
                </div>
            </div>

            <div className={styles.data_1+ ' ' + styles.cell}>
                <img src="/calendar-line.png" />
                <div class={styles.form_input_wrap}>
                    <label>Check-in</label>
                    <input
                        type="date"
                        id="start"
                        name="trip-start"
                        defaultValue="2019-06-19"
                        min="2019-01-01"
                        max="2024-12-31"
                    ></input>
                </div>
            </div>

            <div className={styles.data_2+ ' ' + styles.cell}>
                <div class={styles.form_input_wrap}>
                    <label>Check-out</label>
                    <input
                        type="date"
                        id="end"
                        name="trip-end"
                        defaultValue="2019-06-19"
                        min="2019-01-01"
                        max="2024-12-31"
                    ></input>
                </div>
            </div>

            <div className={styles.guests+ ' ' + styles.cell}>
                <img src="/user.png" />
                <div class={styles.form_input_wrap}>
                    <label>Guests</label>
                    <select id="select__guests">
                        <option defaultValue="value_1">
                        4 adults
                        </option>
                        <option defaultValue="value_2">4 adults with kids</option>
                        <option defaultValue="value_3">2 adults</option>
                        <option defaultValue="value_4">2 adults with kids</option>
                        <option defaultValue="value_5">1 adult</option>
                        <option defaultValue="value_6">1 adult with kids</option>
                    </select>
                </div>
            </div>

            <button className={styles.btn}>Search</button>
        </form>
    </div>
  </div>
);

export default Form;
