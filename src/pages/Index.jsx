import { useState } from "react";
import { Box, Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box>
      <Header />
      <Container centerContent maxW="container.md" mt={8}>
        <VStack spacing={4} w="100%">
          <HStack w="100%">
            <Input
              placeholder="Enter a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button colorScheme="blue" onClick={addTask}>
              Add Task
            </Button>
          </HStack>
          <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;