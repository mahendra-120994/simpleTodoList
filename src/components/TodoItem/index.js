// Write your code here
import './index.css'

const TodoItem = props => {
  const {listDetails, deleteItem} = props
  const {title, id} = listDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-none">
      <div className="list-item">
        <p className="title">{title}</p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
