import {
  Button,
  ButtonText,
  CloseIcon,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';

const SimilarWordsInfoModal = ({isSimModalOpen, setIsSimModalOpen}) => {
  return (
    <Modal isOpen={isSimModalOpen}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Similar Words Game</Heading>
          <ModalCloseButton
            onPress={() => {
              setIsSimModalOpen(false);
            }}>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            eaque minus id maiores! Quam eos a reprehenderit sit molestias illum
            cum dolorum velit doloremque consequuntur. Quos laudantium dolore
            fugit ducimus.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => {
              setIsSimModalOpen(false);
            }}>
            <ButtonText>Close</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SimilarWordsInfoModal;
