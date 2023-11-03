import { v4 as uuidv4 } from 'uuid';


/* eslint-disable react/jsx-key */
function App() {
  /*Codigo Java Script */

const list = [
  {id: uuidv4(), task:"tarefa"},
  {id: uuidv4(), task: "tarefa b"}
]

  function inputMudou(event) {
    console.log(event.target.value);
  }

  function cliqueiNoBotao() {
    console.log("click");
  }

  /*Retorna HTML*/
  return (
    <div>
      <input
        type="text"
        placeholder="o que tenho que fazer?"
        autoFocus
        onChange={inputMudou}
      />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      <ul>
       {
        list.map(item =>(
          <li key={item.id}>{item.task}</li>
          
        ))
       }
      </ul>
    </div>
  );
}

export default App;
