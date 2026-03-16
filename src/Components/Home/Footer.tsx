
import {
  Box,  Flex,  HStack,  Image,  Link,  Stack,  Text,  VStack,  Divider,  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const CompanyFooter = () => {
  return (
    
    <Box bg="white" _dark={{ bg: "gray.200" }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        w="full"
        justify="space-between"
        p={10}
      >
        <Flex justify="center">
          
          <Image
            alt="Logo"
            rounded="lg"
            _hover={{ transform: 'scale(1.05)',transition: 'transform 0.3s ease'}}
            width={{ base: "60px", lg: "60px" }}
            height={{ base: "60px", lg: "60px" }}
            my={{ base: 2, lg: 0 }}
            
          
          />
         
        </Flex>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{ base: "12px", md: "16px" }}
          color="black"
          _dark={{ color: "white" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex justify="start" direction="column">
          <Link href="../Login" isExternal _hover={{ color: "orange.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Entrar</Link>


          </Flex>
          <Flex justify="start" direction="column">
            
          <Link href="../Chamado" isExternal _hover={{ color: "orange.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Quartos</Link>

          </Flex>
        </HStack>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{ base: "12px", md: "16px" }}
          color="black"
          _dark={{ color: "white" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex justify="start" direction="column">
          <Link href="https://www.manduri.sp.gov.br/" isExternal _hover={{ color: "orange.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Localização</Link>

          </Flex>
          <Flex justify="start" direction="column">
            <Link href="https://www.manduri.sp.gov.br/fale-conosco/" isExternal _hover={{ color: "orange.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Contato</Link>



          </Flex>
        </HStack>
      </Stack>
      <Divider
        w="95%"
        mx="auto"
        color="gray.200"
        _dark={{ color: "#F9FAFB" }}
        h="3.5px"
      />



      <VStack py={3}>
        <HStack justify="center">
          <Link href=" " isExternal>
            <Icon
              color="black"
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={FaFacebookF}
              _hover={{ color: "orange.600", _dark: { color: "gray.600" } }}
              
            /> 
          </Link>
          <Link href="./" isExternal>
            <Icon
              color="black"
              _dark={{ color: "white" }}
              h="20px"
              w="20px"
              as={CgWebsite}
              _hover={{ color: "orange.600", _dark: { color: "gray.600" } }}
            />
          </Link>
        
        </HStack>

        <Text textAlign="center" fontSize="smaller" color= "black" _hover={{ color: "orange.600", _dark: { color: "gray.600" } }}>
          
          &copy;Todos os direitos reservados. || Desenvolvido por Matheus Marcelo 
        </Text>
      </VStack>
    </Box>
  );
};

export default CompanyFooter;