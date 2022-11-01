import { styled } from "@stitches/react";
import { MouseEventHandler, ReactNode } from "react";
import Close from "./Close";
export interface ModalProps {
  isOpen: boolean;
  onClickOutside?: MouseEventHandler;
  onClick: MouseEventHandler;
  onModalClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

export const Modal = ({
  isOpen,
  onClickOutside,
  onModalClick,
  onClick,
  children,
}: ModalProps) => {
  return (
    <ModalBackground
      show={isOpen}
      onClick={onClickOutside ? onClickOutside : onClick}
    >
      <ModalContainer onClick={onModalClick}>
        <CloseButton onClick={onClick}>
          <Close />
        </CloseButton>
        {children && <ModalChildren>{children}</ModalChildren>}
      </ModalContainer>
    </ModalBackground>
  );
};

export const ModalContainer = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => (
  <ModalContainerStyled
    onClick={(e) => {
      e.stopPropagation();
      if (onClick) onClick(e);
    }}
  >
    {children}
  </ModalContainerStyled>
);

export default Modal;

export const ModalBackground = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  cursor: "default",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.4)",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  transition: "all 0.2s ease",
  pointerEvents: "none",
  opacity: "0",
  zIndex: "200",
  variants: {
    show: {
      true: {
        pointerEvents: "unset",
        opacity: "1",
      },
    },
  },
});

const ModalContainerStyled = styled("div", {
  width: "fit-content",
  position: "relative",
  minWidth: "20rem",
  minHeight: "12rem",
  padding: "0.5rem",
  backgroundColor: "white",
  cursor: "default",
  boxShadow: "5px 5px 30px -6px rgba(0, 0, 0, 0.2)",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});

export const CloseButton = styled("button", {
  position: "absolute",
  top: "4px",
  left: "4px",
  height: "3rem",
  width: "3rem",
  padding: "0.4rem",
  backgroundColor: "grey",
  color: "white",
  borderRadius: "0",
  border: "0",
  outline: "0",
  transition: "background-color 0.3s",
  "&:focus": {
    outline: "0",
    backgroundColor: "rgb(21, 21, 21)",
  },
});

export const ModalChildren = styled("div");
