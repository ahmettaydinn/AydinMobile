import {Box, Text} from '@gluestack-ui/themed';
import {Center} from '@gluestack-ui/themed';
import React from 'react';

const HowItWorks = () => {
  return (
    <Box sx={{flex: 1, justifyContent: 'space-around'}}>
      <Box
        bg="$teal400"
        p="$5"
        h={120}
        sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Text color="$darkBlue800" bold size="xl">
          Similar Words
        </Text>
      </Box>
      <Box
        bg="$darkBlue800"
        p="$5"
        h={120}
        sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Text color="white" bold size="xl">
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
        bg="$pink600"
        p="$5"
        h={120}
        sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Text color="$darkBlue800" bold size="xl">
          This is the Box
        </Text>
      </Box>
    </Box>
  );
};

export default HowItWorks;
