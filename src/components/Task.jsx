import { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const Task = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    setNewText(task.text);
  };
  const handleSave = () => {
    onUpdate(task.id, newText);
    setIsEditing(false);
  };

  return (
    <Flex align="center" justify="space-between" w="100%" p={2} borderWidth={1} borderRadius="md" mb={2}>
      {isEditing ? (
        <Input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <Text>{task.text}</Text>
      )}
      <Box>
        {isEditing ? (
          <>
            <Button colorScheme="green" size="sm" onClick={handleSave} mr={2}>
              Save
            </Button>
            <Button colorScheme="red" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button colorScheme="blue" size="sm" onClick={handleEdit} mr={2}>
              Edit
            </Button>
            <Button colorScheme="red" size="sm" onClick={() => onDelete(task.id)}>
              Delete
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Task;