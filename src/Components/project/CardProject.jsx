import { Box,  Center,   Image, Link, Text } from '@chakra-ui/react'

const CardB = ({data}) => {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }
    
  return (
    <Box  className="card2" maxW='xs' height='sm' border='1px solid #ffffff' borderRadius='lg' overflow='hidden' >
       <Link href={data.link} isExternal>
      <Image src={data.src} alt={property.imageAlt} maxHeight='200px' width='455px' mb="50px" />

      <Box p='6'>
      <Center>
        <Box mt="-20px" display='flex' alignItems='baseline'>
         
          <Text borderRadius='full' display='center' fontWeight='bold' fontSize="20px">
            {data.name}
          </Text>
      
        </Box>
        </Center>

        <Box
          mt='20px'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {data.addresse}
        </Box>


      </Box>
      </Link>
    </Box>
    
)
}
export default CardB