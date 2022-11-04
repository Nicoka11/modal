# @nicoka/modal

A simple , headless library to add modals to your website !

## Installation

`pnpm add @nicoka/modal`
`yarn add @nicoka/modal`

## Requirements

React : >= 16.8.0

```tsx
const [isOpen, setIsOpen] = useState<boolean>(false);

<Modal isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
  <p>You can see the modal !</p>
</Modal>
```

If you need custom styles, the components of the modal are exposed :

```tsx
import {
  ModalBackground,
  ModalContainer,
  ModalChildren,
  ModalProps,
  CloseIcon as Close,
  CloseButton,
} from "@nicoka/modal";
import { styled } from "@src/styles";

const Container = styled(ModalContainer, {
  backgroundColor: "$slate9",
});

const Modal = ({
  isOpen,
  onClickOutside,
  onModalClick,
  onClick,
  children,
}: ModalProps) => (
  <ModalBackground
    show={isOpen}
    onClick={onClickOutside ? onClickOutside : onClick}
  >
    <Container onClick={onModalClick}>
      <CloseButton onClick={onClick}>
        <Close />
      </CloseButton>
      {children && <ModalChildren>{children}</ModalChildren>}
    </Container>
  </ModalBackground>
);

export default Modal;
```

## Props

`isOpen<boolean>`: Determines wether the modal is visible or not<br/>
`onClick<() => {}>`: Function to trigger when clicking on the close button<br/>
`onModalClick<() => {}>`: Function to trigger when clicking on the modal body<br/>
`onClickOutside<() => {}>`: Function to trigger when clicking on the modal background<br/>
`children<ReactNode>`: children passed to the body, this is where you would put title, description, ect<br/>
