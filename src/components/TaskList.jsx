import { VStack } from "@chakra-ui/react";
import Task from "./Task";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <VStack spacing={4} w="100%">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </VStack>
  );
};

export default TaskList;