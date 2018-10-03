import React from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UIComponents
import { Button } from './Button';

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  padding: 2rem 4rem;
  max-width: 60rem;
  min-width: 36rem;
  max-height: 85%;
  overflow: auto;
  position: absolute;
  top: 5%;
  left: 50%;
  z-index: 2;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  background: #fff;
  transform: translate(-50%, 0);
  transition: all 0.5s ease-in-out;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ModalComponent = ({ isOpen, onAccept, onDecline, children }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalContent isOpen={isOpen}>
        {children}
        <ButtonGroup>
          <Button onClick={onDecline}>não</Button>
          <Button onAccept={onAccept} outline>
            sim
          </Button>
        </ButtonGroup>
      </ModalContent>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: pT.bool,
  onAccept: pT.func,
  onDecline: pT.func
};
ModalComponent.defaultProps = {
  isOpen: false,
  onAccept: () => {},
  onDecline: () => {}
};
