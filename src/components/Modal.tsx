import { styled } from "@stitches/react";
import { MouseEvent } from "react";
import Close from "./Close";
export interface ModalProps {
  isOpen: boolean;
  onClickOutside?: (e: MouseEvent<HTMLDivElement>) => void;
  onClick: () => (e: MouseEvent<HTMLDivElement>) => void;
  message: string;
}

export const Modal = ({
  isOpen,
  onClickOutside,
  onClick,
  message,
}: ModalProps) => {
  return (
    <ModalBackground
      show={isOpen}
      onClick={onClickOutside ? onClickOutside : onClick}
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClick}>
          <Close />
        </CloseButton>
        <ModalMessage>{message}</ModalMessage>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  cursor: "default",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(250, 250, 250, 0.5)",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 0.5s",
  "&:hover": {
    backgroundColor: "rgba(216, 252, 250, 0.8)",
  },
  variants: {
    show: {
      true: {
        display: "flex",
      },
    },
  },
});

const ModalContainer = styled("div", {
  width: "fit-content",
  height: "60px",
  borderRadius: "5px",
  backgroundColor: "white",
  padding: "0",
  cursor: "default",
  display: "flex",
  alignItems: "center",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  boxShadow: "5px 5px 30px -6px rgba(0, 0, 0, 0.2)",
});

const CloseButton = styled("button", {
  height: "100%",
  width: "60px",
  cursor: "pointer",
  borderRadius: "4px 0 0 4px",
  backgroundColor: "#32d7f0",
  padding: "auto",
  border: "0",
});

const ModalMessage = styled("span", {
  color: "#32D7F0",
  marginLeft: "20px",
  marginRight: "20px",
});
