import { useEffect, useState, useCallback } from 'react';
import { Box, Center, SimpleGrid, Button } from '@chakra-ui/react';
import ProfileCard from '@/components/ProfileCard';
import { ProfileProps } from '@/types/profileType';

export default function Example() {
	const [profileData, ProfileData] = useState([] as ProfileProps[]);
	const [isLoading, setLoading] = useState(false);
	const [doneFetching, setDoneFetching] = useState(false);

	const fecthProfiles = useCallback(
		async (page: number) => {
			setLoading(true);
			setLoading(true);
			fetch(`https://reqres.in/api/users?page=${page}`)
				.then((res) => res.json())
				.then((data) => {
					ProfileData([...profileData, ...data.data]);
					setLoading(false);
				});
		},
		[profileData]
	);

	useEffect(() => {
		if (!profileData.length) fecthProfiles(1);
	}, [fecthProfiles, profileData]);

	const handleLoadMore = () => {
		setLoading(true);
		fecthProfiles(2);
		setDoneFetching(true);
	};

	return (
		<Box
			w="100%"
			p={4}
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			display="flex">
			{!profileData && <Box>No profileData</Box>}
			<SimpleGrid columns={{ sm: 2, md: 3 }} spacing="8">
				{profileData?.map((profile: ProfileProps) => (
					<ProfileCard
						key={profile.id}
						id={profile.id}
						email={profile.email}
						first_name={profile.first_name}
						last_name={profile.last_name}
						avatar={profile.avatar}
					/>
				))}
			</SimpleGrid>
			<Button
				mt={4}
				colorScheme="blue"
				loadingText="Fetching"
				onClick={handleLoadMore}
				isLoading={isLoading}
				isDisabled={doneFetching}>
				Load more
			</Button>
		</Box>
	);
}
