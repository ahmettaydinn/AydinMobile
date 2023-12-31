import {Box, Pressable, Text} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import SimilarWordsInfoModal from '../components/SimilarWords/modals/similarWordsInfoModal';

const HowItWorks = () => {
  const [isSimModalOpen, setIsSimModalOpen] = useState(false);

  return (
    <Box sx={{flex: 1, justifyContent: 'space-around'}}>
      <Pressable onPress={() => setIsSimModalOpen(true)}>
        <Box
          bg="$backgroundLight200"
          p="$5"
          h={120}
          sx={{justifyContent: 'center', alignItems: 'center'}}>
          <Text color="$darkBlue800" bold size="xl">
            Similar Words
          </Text>
        </Box>
      </Pressable>

      <Box
        bg="$backgroundLight200"
        p="$5"
        h={120}
        sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Text color="$darkBlue800" bold size="xl">
          This is the Box
        </Text>
      </Box>
      <Box
        bg="$backgroundLight200"
        p="$5"
        h={120}
        sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Text color="$darkBlue800" bold size="xl">
          This is the Box
        </Text>
      </Box>
      <Box
        bg="$backgroundLight200"
        p="$5"
        h={120}
        sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Text color="$darkBlue800" bold size="xl">
          This is the Box
        </Text>
      </Box>

      <SimilarWordsInfoModal
        isSimModalOpen={isSimModalOpen}
        setIsSimModalOpen={setIsSimModalOpen}
      />
    </Box>
  );
};

export default HowItWorks;
