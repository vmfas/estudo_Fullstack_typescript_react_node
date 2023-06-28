import {
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Center>
            <Button colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              Send
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
