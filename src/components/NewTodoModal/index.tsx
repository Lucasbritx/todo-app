import React from "react";
import { Modal } from "react-native";
import NewTodoForm from "../NewTodoForm";
import { Container } from "./styles";

interface INewTodoModal {
  showModal: boolean;
  closeModal: () => void;
  onSave: () => void;
}

export default function NewTodoModal({
  showModal,
  closeModal,
  onSave,
}: INewTodoModal) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <Container>
        <NewTodoForm onSave={onSave} />
      </Container>
    </Modal>
  );
}
