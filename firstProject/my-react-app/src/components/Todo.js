function Todo(props) {

    function deleteHandler(){
        console.log('Clicked!');
        console.log(props.text);
    }

  return (
    <div className="card">
      <h2>Title</h2>
      <div className="actions">
          <span>{props.text}</span>
        <button className="btn" onClick={deleteHandler} >Delete</button>
      </div>
    </div>
  );
}

export default Todo;
