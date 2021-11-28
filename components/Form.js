import React from 'react'
import style from './Form.module.css'

const Form = () => {
  return (
    <form className={style.form} action="">
      <label className={style.label} htmlFor="name">
        Name
      </label>
      <input
        className={style.input}
        type="text"
        id="name"
        placeholder="e.g. Sahar Rules"
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
      />
      <input className={style.submit} type="submit" value="Submit"></input>
    </form>
  )
}

export default Form
