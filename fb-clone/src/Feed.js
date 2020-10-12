import React ,{useEffect,useState}from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'


function Feed() {

	const[posts,setPosts]=useState([])

	useEffect(()=>{
		db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>(
			setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()  }  )  ))

			))
	},[])

	return(
		<div className="feed">
		<StoryReel />
		<MessageSender />
		{/*// <Post 
		// profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU"
		// message="Wow this works"
		// timestamp="This is a time stamp"
		// username="Robert James"
		// image="https://code.org/shared/images/social-media/codeorg2019_social.png"
		// />
		// <Post 
		
		// profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU"
		// message="Wow this works"
		// timestamp="This is a time stamp"
		// username="Robert James"
		// image="https://code.org/shared/images/social-media/codeorg2019_social.png"
		// />*/}

		{posts.map(post=>(

			<Post
			key={post.data.id} 
			profilePic={post.data.profilePic}
			message={post.data.message}

			timestamp={new Date(post.data.timestamp?.toDate()).toUTCString()}
			username={post.data.username}
			image={post.data.image}
			/>



			))}


	
		</div>

		)
}

export default Feed;