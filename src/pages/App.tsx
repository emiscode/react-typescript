import Form from '../components/Form';
import List from '../components/ListComponent';
import style from './App.module.scss';

function App() {
  return ( 
      <div className={style.AppStyle}>
        <Form />
        <List />
      </div>
  );
}

export default App;
