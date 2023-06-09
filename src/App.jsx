import "./styles.css";

export default function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">#1 Jersey Shore To Do List</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Gym
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Tan
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Laundary
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
