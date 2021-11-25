import { Center, Image } from '@chakra-ui/react'
import React from 'react'

const PrincipalImage = ({imagePath}) => {
    return (
        <Center w="100vw" my="20px">
        <Center maxW="80%" rounded="lg" boxShadow="dark-lg" overflow="hidden">
            <Image src={imagePath} maxW="100%" />
        </Center>
        </Center>
    )
}

export default PrincipalImage
