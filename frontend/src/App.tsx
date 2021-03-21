import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.less';
import { useDispatch, useSelector } from 'react-redux'
import { eatActions } from './redux/testReducer';
import { RootState } from './redux/store';
import { TestComponent } from './components/TestComponent';

function App() {

  const [test, setTest] = useState('')

  const dispatch = useDispatch()
  const name = useSelector((state: RootState) => state.eat.name)
  const hunger = useSelector((state: RootState) => state.eat.wantEat)

  const clickHandler = () => {
    dispatch(eatActions.toggleWantEat())
  }

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(eatActions.setNewName(event.target.value))
    console.log(event);

  }

  useEffect( () => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/shum').then(response => response.json())
      setTest(res.testRes)
    }
    fetchData()  
    
  }, [])

  console.log(name);
  console.log(test);



  return (
    <div className="App">
      <div>{name}</div>
      <button onClick={clickHandler}>Голоден</button>
      <div>Хочу есть&&&? {hunger ? 'Yes' : 'No'}</div>
      <input type="text" placeholder="New name" onBlur={inputHandler} />
      <TestComponent testRes={test} />
    </div>
  );
}

export default App;
