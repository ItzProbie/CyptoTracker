import { Avatar, Box, Stack, VStack , Text , HStack} from '@chakra-ui/react';
import React from 'react';
import aarya from "../assets/aaryaman.jpeg";
import varad from "../assets/varad.jpeg"; 
import piyush from "../assets/piyush.jpeg";

const footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}>
        <Stack direction={["colums","row"]} h={"full"} alignItems={"center"}>
            <VStack w={"full"} alignItems={["center","flex-start"]}>
                <Text fontWeight={"bold"}>About Us</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>
                    This project is build for the Skill Development Webpage project by students of class TE8
                </Text>
            </VStack>
            <HStack gap={"7"}>
            <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]} src={aarya}/>
                <Text>Aaryaman</Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]} src={varad}/>
                <Text >Varad</Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]} src={piyush}/>
                <Text>Piyush</Text>
            </VStack>
            </HStack>
        </Stack>
    </Box>
  )
}

export default footer