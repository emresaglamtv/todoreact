import React, { useEffect } from 'react'
import { useState } from 'react'

const initialFormValues = { text: "", done: "" }
function Form({ addCalendar, calendar }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues)
  }, [calendar])

  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (form.text === '') {
      return false;
    }

    addCalendar([...calendar, form])


    console.log(form)
  };

  return (
    <div className="todoapp" onSubmit={onSubmit}>
      <header className="header">
        <h1>todos</h1>
        <form>
          <input className="new-todo" name='text' placeholder="What needs to be done?" onChange={onChangeInput} value={form.text} autoFocus />
        </form>
      </header>
    </div>


  )
}

export default Form