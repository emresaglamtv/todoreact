import { useState } from "react";

function List({ calendar, setCalendar }) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleToggleDone = (index) => {
    const updatedCalendar = [...calendar];
    updatedCalendar[index].done = !updatedCalendar[index].done;
    setCalendar(updatedCalendar);
  };

  const filteredCalendar = () => {
    if (selectedFilter === "All") {
      return calendar;
    } else if (selectedFilter === "Active") {
      return calendar.filter(item => !item.done);
    } else if (selectedFilter === "Completed") {
      return calendar.filter(item => item.done);
    }
  };

  const clearCompleted = () => {
    const updatedCalendar = calendar.filter(item => !item.done);
    setCalendar(updatedCalendar)
  }

  const deleteSelected = (index) => { 
    const updatedCalendar = [...calendar];
    updatedCalendar.splice(index, 1);
    setCalendar(updatedCalendar);
  }

  const numberOfLi = calendar.length;

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{numberOfLi} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className={selectedFilter === "All" ? "All" : ""} onClick={() => setSelectedFilter("All")}>
              All
            </a>
          </li>
          <li>
            <a href="#/" className={selectedFilter === "Active" ? "Active" : ""} onClick={() => setSelectedFilter("Active")}>
              Active
            </a>
          </li>
          <li>
            <a href="#/" className={selectedFilter === "Completed" ? "Completed" : ""} onClick={() => setSelectedFilter("Completed")}>
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>


      <ul className="todo-list">
        {filteredCalendar().map((item, index) => (
          <li className={item.done ? "Completed" : "Active"} key={index}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.done}
                onChange={() => handleToggleDone(index)}
              />
              <label>{item.text}</label>
              <button
                className="destroy"
                type="button"
                onClick={deleteSelected}
              >

              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default List