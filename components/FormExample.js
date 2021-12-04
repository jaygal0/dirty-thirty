import React, { useState } from 'react'
import { useRouter } from 'next/router'
import style from './FormExample.module.css'

const FormExample = () => {
  const router = useRouter()
  const [data, setData] = useState({
    name: '',
    allergies: '',
    date: '',
    rsvp: '',
  })
  const { name, allergies, date, rsvp } = data

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch(
        'https://v1.nocodeapi.com/joshsiara78032/google_sheets/RWcTAdyDqKAuiwmp?tabId=Sheet1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            [name, allergies, date, rsvp, new Date().toLocaleString()],
          ]),
        }
      )
      router.push('/success')
      setData({ ...data, name: '', allergies: '', date: '', rsvp: '' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.labelForm}>select one</label>
      <div className={style.radio}>
        <input
          type="radio"
          name="rsvp"
          value="yas"
          onChange={handleChange}
          required
        />
          <label className={style.marginRight}>YAS</label> {' '}
        <input type="radio" name="rsvp" value="nah" onChange={handleChange} /> {' '}
        <label>NAH</label>
      </div>
      <label className={style.label}>Name</label>
      <input
        required
        placeholder="e.g. Sahar Rules"
        className={style.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <label className={style.label}>Allergies (optional)</label>
      <input
        type="text"
        placeholder="FYI Sahar is allergic to nuts"
        className={style.input}
        name="allergies"
        value={allergies}
        onChange={handleChange}
      />
      <label className={style.label}>When Is My Actual Birthday?</label>
      <input
        required
        placeholder="Get this wrong and you don't eat!"
        className={style.input}
        type="text"
        name="date"
        value={date}
        onChange={handleChange}
      />
      <button className={style.submit}>Submit</button>
    </form>
  )
}

export default FormExample
