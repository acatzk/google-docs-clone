import React from 'react'
import Button from '@material-tailwind/react/Button'
import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'

interface CreateModalProps {
  showModal: boolean
  setShowModal: Function
  input: string
  setInput: Function
  createDocument: Function
  size?: string
}

const CreateModal: React.FC<CreateModalProps> = ({
  showModal,
  setShowModal,
  input,
  setInput,
  createDocument,
  size,
}) => {
  return (
    <Modal
      size={size || 'sm'}
      active={showModal}
      toggler={() => setShowModal(false)}
    >
      <ModalBody>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="outline-none w-full"
          placeholder="Enter name of document..."
          onKeyDown={(e) => e.key === 'Enter' && createDocument()}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="blue"
          buttonType="link"
          onClick={() => setShowModal(false)}
          ripple="dark"
        >
          Cancel
        </Button>
        <Button color="blue" onClick={createDocument} ripple="light">
          Create
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default CreateModal
