import React, { useState } from 'react'
import style from './Form.module.css'

const Form = () => {
  const [data, setData] = useState({
    name: '',
    allergies: '',
    date: '',
  })

  const { name, allergies, date } = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/joshsiara78032/google_sheets/ocvtVcKbrOxWxzrc?tabId=Sheet1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            [name, allergies, date, new Date().toLocaleString()],
          ]),
        }
      )
      await response.json()
      setData({ ...data, name: '', allergies: '', date: '' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={style.form} action="" onSubmit={handleSubmit}>
      {/* <div className={style.radio}>
        <input type="radio" id="yas" name="rsvp" value="yas" checked /> {' '}
        <label className={style.marginRight} for="yas">
          YAS
        </label>
          <input type="radio" id="nah" name="rsvp" value="nah" /> {' '}
        <label for="nah">NAH</label>
      </div> */}
      <label className={style.label} htmlFor="name">
        Name
      </label>
      <input
        className={style.input}
        type="text"
        name="name"
        placeholder="e.g. Sahar Rules"
        required
        value={name}
        onChange={handleChange}
      />
      <label className={style.label} htmlFor="allergies">
        Allergies (optional)
      </label>
      <input
        className={style.input}
        type="text"
        name="allergies"
        placeholder="FYI Sahar is allergic to nuts"
        value={allergies}
        onChange={handleChange}
      />
      <label className={style.label} htmlFor="birthday">
        When Is My Actual Birthday?
      </label>
      <input
        className={style.input}
        type="text"
        name="date"
        placeholder="Get this wrong and you don't eat!"
        required
        value={date}
        onChange={handleChange}
      />
      <input className={style.submit} type="submit" value="Submit"></input>
    </form>
  )
}

export default Form
