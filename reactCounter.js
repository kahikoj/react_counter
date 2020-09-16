function Button(props) {
  const handleClick= () => props.onClickFunction(props.Add);
	return (
    <button onClick={handleClick}>
      +Add{props.Add}
    </button>
  );
}
function Display(props) {
  return (
  <div>{props.count}</div>
  );
}
function App() {
  const [counter, setCounter] = useState(0); 
  const Add = (AddValue)=>setCounter(counter+AddValue);
  return (
   <div>
    <Button onClickFunction={Add} Add={1}/>
    <Button onClickFunction={Add} Add={5}/>
    <Button onClickFunction={Add} Add={10}/>
    <Button onClickFunction={Add} Add={20}/>
    <Display count= {counter}/>
  </div>)
}
ReactDOM.render(
    <App />, 
  document.getElementById('mountNode'),
);