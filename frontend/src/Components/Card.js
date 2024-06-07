import React from 'react'
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Cards = (props) => {

  return (
    <div className='card'>
              <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    height='25vh'
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={props.imgurl}
    alt='Ser1'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>{props.heading}</Heading>
      <Text py='2'>
        {props.bodyText}
      </Text>
    </CardBody>
  </Stack>
</Card>
    </div>
  )
}

export default Cards
