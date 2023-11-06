import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Container, List, H1, Input, Button, Li,ListItem } from "./styles.js";
import { FcEmptyTrash, FcCheckmark, } from "react-icons/fc";

/* eslint-disable react/jsx-key */
function App() {
  /*Codigo Java Script */

  const [list, setList] = useState([
    {
      id: uuidv4(),
      task: (""),
    },
  ]);
  const [task, setTask] = useState("");

  // estrutura do estado useState -> nome variavel,nome pra alterar a variavel -> formato padrão pra exibir na tela

  function inputMudou(event) {
    console.log(event.target.value);

    setTask(event.target.value); // vai add dentro do array um task que tá escrito dentro do input e alterando com setList

    console.log(task);
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuidv4(), task }]);
  }

  /*Retorna codigo HTML*/
  return (
    <Container>
      <List>
        <H1>React Agenda</H1>
        <Input
          type="text"
          placeholder="o que tenho que fazer?"
          autoFocus
          onChange={inputMudou}
        />

        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.map((item) => (
            <ListItem>
              <FcCheckmark />
              <Li key={item.id}>{item.task}</Li>
              <FcEmptyTrash />
            </ListItem>
          ))}
        </ul>
      </List>
    </Container>
  );
}

export default App;
