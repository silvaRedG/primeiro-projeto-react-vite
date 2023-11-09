import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import {
  Container,
  List,
  H1,
  Input,
  Button,
  Li,
  Ul,
  ListItem,
  Trash,
  Check,
  Edit,
} from "./styles.js";

// Gravar a lista localmente ou seja sempre atualizar o navegador a lista permanece
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}


function App() {
  const [list, setList] = useState(getLocalStorage());
  const [task, setTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTask, setEditTask] = useState("");

  function inputMudou(event) {
    setTask(event.target.value);
  }

  // Inserir tarefa ao apertar o enter
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      cliqueiNoBotao();
    }
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  //Adicionar Lista
  function cliqueiNoBotao() {
    if (task) {
      setList([...list, { id: uuidv4(), task, finished: false }]);
      setTask("");
    }else{
      alert("Digite uma tarefa")
    }
    
  }
// Função na qual vai ser criada a edição da tarefa
  function editarTarefa(id) {
    setEditingTaskId(id);
    const taskToEdit = list.find((item) => item.id === id);
    if (taskToEdit) {
      setEditTask(taskToEdit.task);
    }
  }

  // Função pra salvar a tarefa
  function salvarEdicao(id) {


    if (editTask.trim() === '') {
      alert("O campo não pode ficar vazio")
    }else{

      const updatedList = list.map((item) =>
      item.id === id ? { ...item, task: editTask } : item
    );
    setList(updatedList);
    setEditingTaskId(null);
    
    }

    
  }

  // Função que cancela a edição da tarefa
  function cancelarEdicao() {
    setEditingTaskId(null);
    setEditTask("");
  }

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("taskList"));
    if (storedTasks) {
      setList(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(list));
  }, [list]);

  function finishTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <List>
        <H1>React Agenda</H1>
        <Input
          type="text"
          placeholder="Minha rotina"
          autoFocus
          value={task}
          onChange={inputMudou}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <Ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                {item.id === editingTaskId ? (
                  
                  <>
                    <input
                      type="text"
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                      
                    />
                    <Button onClick={() => salvarEdicao(item.id)}>
                      Salvar
                    </Button>
                    <Button onClick={cancelarEdicao}>Cancelar</Button>
                    
                  </>
                ) : (
                  
                  <>
                      <Li>{item.task}</Li>
                    <Check onClick={() => finishTask(item.id)} />
                    
                    <Edit onClick={() => editarTarefa(item.id)}/>
                    <Trash onClick={() => deleteItem(item.id)} />
                  </>
                  
                )}
              </ListItem>
            ))
          ) : (
            <h3>Sem Tarefas</h3>
          )}
        </Ul>
      </List>
    </Container>
  );
}

export default App;
