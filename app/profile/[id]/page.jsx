import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const UserProfile = ({ params }) => {

    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();

            setUserPosts(data);
        };

        if (params?.id) fetchPosts();
    }, [params.id]);

    return (
        <>
            <Profile
                name={userName}
                desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
                data={userPosts}
            />
        </>
    )
}

export default UserProfile