import React from "react"

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <label className="todo-label">
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            <span className="checkmark"></span>
            <span className="todo-text">{todo.text}</span>
          </label>
          {todo.reminderDate && !todo.completed && (
            <span className="reminder-date">Reminder: {new Date(todo.reminderDate).toLocaleString()}</span>
          )}
          <button className="delete-btn" onClick={() => onDelete(todo.id)}>
            ×
          </button>
        </li>
      ))}
    </ul>
  )
}

