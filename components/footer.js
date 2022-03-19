import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Jaime Tavares. All Rights Reserved.
      Project based on a tutorial from <Link href="https://www.craftz.dog/">Takuya Matsuyama</Link>
    </Box>
    
  )
}

export default Footer
