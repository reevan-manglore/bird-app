import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import TweetBox from "./Components/TweetBox";
import TweetFeedTile from "./Components/TweetFeedTile";

function ContentBar() {
  const {logout,userName}  = useContext(AuthContext);
  return (
    <main className=' pt-6 bg-background h-screen overflow-y-scroll scroolbar-hidden border-r border-slate-500'>
      <p className='text-white text-xl font-semibold px-2'>Home</p>
      <TweetBox/>
      <TweetFeedTile
       userName={userName}
       profilePhoto = {`https://api.dicebear.com/5.x/initials/svg?seed=${userName}&backgroundColor=1CF2B5&size=32&radius=50`}
       message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum minus rerum magni debitis velit iusto illo exercitationem est, culpa, commodi quidem voluptates, architecto doloremque. Vero modi eum repudiandae eligendi voluptate?       "
      />
      <TweetFeedTile
       userName={userName}
       profilePhoto = {`https://api.dicebear.com/5.x/initials/svg?seed=${userName}&backgroundColor=1CF2B5&size=32&radius=50`}
       message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum minus rerum magni debitis velit iusto illo exercitationem est, culpa, commodi quidem voluptates, architecto doloremque. Vero modi eum repudiandae eligendi voluptate?       "
      />
      <TweetFeedTile
       userName={userName}
       profilePhoto = {`https://api.dicebear.com/5.x/initials/svg?seed=${userName}&backgroundColor=1CF2B5&size=32&radius=50`}
       message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum minus rerum magni debitis velit iusto illo exercitationem est, culpa, commodi quidem voluptates, architecto doloremque. Vero modi eum repudiandae eligendi voluptate?       "
      />
      <TweetFeedTile
       userName={userName}
       profilePhoto = {`https://api.dicebear.com/5.x/initials/svg?seed=${userName}&backgroundColor=1CF2B5&size=32&radius=50`}
       message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum minus rerum magni debitis velit iusto illo exercitationem est, culpa, commodi quidem voluptates, architecto doloremque. Vero modi eum repudiandae eligendi voluptate?       "
      />
      <TweetFeedTile
       userName={userName}
       profilePhoto = {`https://api.dicebear.com/5.x/initials/svg?seed=${userName}&backgroundColor=1CF2B5&size=32&radius=50`}
       message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum minus rerum magni debitis velit iusto illo exercitationem est, culpa, commodi quidem voluptates, architecto doloremque. Vero modi eum repudiandae eligendi voluptate?       "
      />
      <TweetFeedTile
       userName={userName}
       profilePhoto = {`https://api.dicebear.com/5.x/initials/svg?seed=${userName}&backgroundColor=1CF2B5&size=32&radius=50`}
       message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum minus rerum magni debitis velit iusto illo exercitationem est, culpa, commodi quidem voluptates, architecto doloremque. Vero modi eum repudiandae eligendi voluptate?       "
      />
      <TweetFeedTile
       userName={userName}
       profilePhoto = {`https://api.dicebear.com/5.x/initials/svg?seed=${userName}&backgroundColor=1CF2B5&size=32&radius=50`}
       message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum minus rerum magni debitis velit iusto illo exercitationem est, culpa, commodi quidem voluptates, architecto doloremque. Vero modi eum repudiandae eligendi voluptate?       "
      />
    </main>
  )
}

export default ContentBar