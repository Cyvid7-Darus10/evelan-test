import { FunctionComponent, ReactElement } from 'react';
import { Box, Flex, Badge, Text, Image, Center } from '@chakra-ui/react';
import { ProfileProps } from '@/types/profileType';

const ProfileCard: FunctionComponent<ProfileProps> = ({
	id,
	email,
	first_name,
	last_name,
	avatar,
}): ReactElement => {
	return (
		<Box
			p="4"
			w="220px"
			borderRadius={8}
			boxShadow="lg"
			backdropBlur={5}
			background="white">
			<Center>
				<Image
					src={avatar}
					borderRadius="full"
					boxSize="150px"
					objectFit="cover"
					alt={`${first_name} ${last_name} avatar`}
				/>
			</Center>
			<Flex align="baseline" mt={2}>
				<Badge colorScheme="pink">{id}</Badge>
				<Text
					ml={2}
					textTransform="uppercase"
					fontSize="sm"
					fontWeight="bold"
					color="pink.800">
					{first_name} {last_name}
				</Text>
			</Flex>
			<Text mt={2} textAlign="left" color="gray.500" fontSize="sm">
				{email}
			</Text>
		</Box>
	);
};

export default ProfileCard;
