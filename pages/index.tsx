import { useEffect, useState, useCallback } from 'react';
import { Box, SimpleGrid, Button } from '@chakra-ui/react';
import ProfileCard from '@/components/Common/ProfileCard';
import { ProfileProps } from '@/types/profileType';
import BasicLayout from '@/components/Layout/BasicLayout';

export default function Index() {
	const [profileData, setProfileData] = useState([] as ProfileProps[]);
	const [isFetchingProfiles, setIsFetchingProfiles] = useState(false);
	const [doneFetching, setDoneFetching] = useState(false);

	const fetchProfiles = useCallback(
		async (page: number) => {
			setIsFetchingProfiles(true);
			fetch(`https://reqres.in/api/users?page=${page}`)
				.then((res) => res.json())
				.then((data) => {
					setProfileData([...profileData, ...data.data]);
					setIsFetchingProfiles(false);
				});
		},
		[profileData]
	);

	useEffect(() => {
		if (!profileData.length) {
			fetchProfiles(1);
		}
	}, [fetchProfiles, profileData]);

	const handleLoadMore = () => {
		setIsFetchingProfiles(true);
		fetchProfiles(2);
		setDoneFetching(true);
	};

	return (
		<BasicLayout>
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
					isLoading={isFetchingProfiles}
					isDisabled={doneFetching}>
					Load more
				</Button>
			</Box>
		</BasicLayout>
	);
}
