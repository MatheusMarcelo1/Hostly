import React, { useState } from "react";

import {  Box,  Button, FormControl,  FormLabel,  GridItem,  Input,  Select,  SimpleGrid,  Stack,  chakra,  Divider,} from "@chakra-ui/react";

const Choc = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    endereco: "",
    cidade: "",
    estado: "",
    noites: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    setFormData({
      nome: "",
      empresa: "",
      telefone: "",
      email: "",
      endereco: "",
      cidade: "",
      estado: "",
      noites: "",
    });
  };

  return (
    
    <Box bg="#edf3f8" _dark={{ bg: "#111" }} p={10}>
      
      <Divider
        my="5"
        borderColor="gray.300"
        _dark={{ borderColor: "whiteAlpha.300" }}
        visibility={{ base: "hidden", sm: "visible" }}
      />
      <p> Formulário || CADASTRO DE HÓSPEDES</p>

      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
         
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg="white"
                _dark={{ bg: "#141517" }}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="nome"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Nome
                    </FormLabel>
                    <Input
                      type="text"
                      name="nome"
                      id="nome"
                      autoComplete="given-name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="empresa"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Empresa
                    </FormLabel>
                    <Input
                      type="text"
                      name="empresa"
                      id="empresa"
                      autoComplete="family-name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="telefone"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Telefone / Celular
                    </FormLabel>
                    <Input
                      type="text"
                      name="telefone"
                      id="telefone"
                      autoComplete="given-name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="email"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      E-mail
                    </FormLabel>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="family-name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="street_address"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Endereço
                    </FormLabel>
                    <Input
                      type="text"
                      name="endereco"
                      id="endereco"
                      autoComplete="street-address"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="cidade"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Cidade
                    </FormLabel>
                    <Input
                      type="text"
                      name="cidade"
                      id="cidade"
                      autoComplete="city"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="estado"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Estado
                    </FormLabel>
                    <Input
                      type="text"
                      name="estado"
                      id="estado"
                      autoComplete="state"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                  <FormControl as={GridItem} colSpan={[1, 1]}>
                        <FormLabel
                          htmlFor="country"
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{
                            color: 'gray.50',
                          }}>
                          Número do Quarto
                        </FormLabel>
                        <Select
                          id="quarto"
                          name="quarto"
                          autoComplete="quarto"
                          placeholder="Selecione o quarto"
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md">
                          <option>Quarto 1</option>
                          <option>Quarto 2</option>
                          <option>Quarto 3</option>
                          <option>Quarto 4</option>
                          <option>Quarto 5</option>
                          <option>Quarto 6</option>
                          <option>Quarto 7</option>
                          <option>Quarto 8</option>
                          <option>Quarto 9</option>
                          <option>Quarto 10</option>
                          <option>Quarto 11</option>
                          <option>Quarto 12</option>
                          <option>Quarto 13</option>
                          <option>Quarto 14</option>
                          <option>Quarto 15</option>
                          <option>Quarto 16</option>
                          <option>Quarto 17</option>
                          <option>Quarto 18</option>
                          <option>Quarto 19</option>
                          <option>Quarto 20</option>
                          <option>Quarto 21</option>
                          <option>Quarto 22</option>
                          <option>Quarto 23</option>
                          <option>Quarto 24</option>
                          <option>Quarto 25</option>
                          <option>Quarto 26</option>
                          <option>Quarto 27</option>
                          <option>Quarto 28</option>
                          <option>Quarto 29</option>
                          <option>Quarto 30</option>
                        </Select>
                      </FormControl>
                     
                    
                  </FormControl>
                  
                  
                </SimpleGrid>
                 
                <FormLabel
                      style={{ marginInlineEnd: "auto" }}
                      htmlFor="cep"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{ color: "gray.50" }}
                    >
                      Quantidade de Noites
                    </FormLabel>
                    <Input
                      type="text"
                      name="cep"
                      id="cep"
                      autoComplete="postal-code"
                      mt={-6}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="20%"
                      rounded="md"
                    />

                <Button
                    colorScheme="green"
                    size="sm" 
                    width= "150px"
                    style={{ marginInlineStart: "auto", marginInlineEnd: "auto" }}
                    _hover={{ bg: "green.600" }} 
                    >
                    Salvar
                  </Button>
              </Stack>
              
            </chakra.form>
            
          </GridItem>
        </SimpleGrid>
        
      </Box>

      <Divider
        my="5"
        borderColor="gray.300"
        _dark={{ borderColor: "whiteAlpha.300" }}
        visibility={{ base: "hidden", sm: "visible" }}
      />

      
    </Box>
  );
};

export default Choc;
