import { useState, useEffect } from 'react'
import List from './List/list-index'
import Form from './Form/form-index'

function Calendar() {
  const [calendar, setCalendar] = useState([
    {
      text: "Taste JavaScript",
      done: true
    },

    {
      text: "Code furiously",
      done: true
    },

    {
      text: "Promote Mavo",
      done: false
    },

    {
      text: "Give talks",
      done: false
    },

    {
      text: "Write tutorials",
      done: true
    },

    {
      text: "Have a life!",
      done: false
    }
  ]);

  useEffect(() => {

  }, [calendar]);

  return (
    <div>
      <Form addCalendar={setCalendar} calendar={calendar} />
      <List calendar={calendar} setCalendar={setCalendar} />

    </div>
  )
}

export default Calendar