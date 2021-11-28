import React from 'react'
import style from './Form.module.css'

const Form = () => {
  return (
    // TODO: Need to couple the form to Google Sheets
    <form className={style.form} action="">
      <div className={style.radio}>
        <input type="radio" id="yas" name="rsvp" value="yas" checked /> {' '}
        <label className={style.marginRight} for="yas">
          YAS
        </label>
          <input type="radio" id="nah" name="rsvp" value="nah" /> {' '}
        <label for="nah">NAH</label>
      </div>
      <label className={style.label} htmlFor="name">
        Name
      </label>
      <input
        className={style.input}
        type="text"
        id="name"
        placeholder="e.g. Sahar Rules"
        required
      />
      <label className={style.label} htmlFor="allergies">
        Allergies (optional)
      </label>
      <input
        className={style.input}
        type="text"
        id="allergies"
        placeholder="FYI Sahar is allergic to nuts"
      />
      <label className={style.label} htmlFor="birthday">
        When Is My Actual Birthday?
      </label>
      <input
        className={style.input}
        type="text"
        id="birthday"
        placeholder="Get this wrong and you don't eat!"
        required
      />
      <input className={style.submit} type="submit" value="Submit"></input>
    </form>
  )
}

export default Form
