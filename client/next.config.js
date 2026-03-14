module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5000';
    
    return [
      {
        source: "/api/post/checkUser",
        destination: `${SERVER_URL}/api/post/checkUser`,
      },
      {
        source:"/api/post/checkusername",
        destination:`${SERVER_URL}/api/post/checkusername`
      }
      ,
      {
        source:"/api/post/Register",
        destination:`${SERVER_URL}/api/post/Register`
      },
      {
        source:"/api/post/login",
        destination:`${SERVER_URL}/api/post/login`
      }
      ,
      {
        source:"/api/get/getUser",
        destination:`${SERVER_URL}/api/get/getUser`
      },
      {
        source:"/api/post/tweet",
        destination:`${SERVER_URL}/api/post/tweet`
      },
      {
        source:"/api/post/comment/:id",
        destination:`${SERVER_URL}/api/post/comment/:id`
      },
      {
        source:"/api/get/getComments/:id",
        destination:`${SERVER_URL}/api/get/getComments/:id`
      },
      {
        source:"/api/get/getAllTweet",
        destination:`${SERVER_URL}/api/get/getAllTweet`
      },
      {
        source:"/api/get/getTweet/:id",
        destination:`${SERVER_URL}/api/get/getTweet/:id`
      },
      {
        source:"/api/get/getComment/:id",
        destination:`${SERVER_URL}/api/get/getComment/:id`
      },
      {
        source:"/api/post/like/:id/:type",
        destination:`${SERVER_URL}/api/post/like/:id/:type`
      }
      ,
      {
        source:"/api/get/whoToFollow",
        destination:`${SERVER_URL}/api/get/whoToFollow`
      }
      ,
      {
        source:"/api/get/fetchSingleUserDetails/:id",
        destination:`${SERVER_URL}/api/get/getSingleUser/:id`
      }
      ,
      {
        source:"/api/get/fetchUserTweets/:id",
        destination:`${SERVER_URL}/api/get/getSingleUserTweets/:id`
      }
      ,
      {
        source:"/api/get/fetchUserReplies/:id",
        destination:`${SERVER_URL}/api/get/getSingleUserComments/:id`
      }
      ,
      {
        source:"/api/get/fetchUserLikes/:id",
        destination:`${SERVER_URL}/api/get/getSingleUserLikes/:id`
      }
      ,
      {
        source:"/api/post/follow/:id/:follow",
        destination:`${SERVER_URL}/api/post/follow/:id/:follow`
      }
      ,
      {
        source:"/api/get/fetchFollowers/:id",
        destination:`${SERVER_URL}/api/get/getSingleUserFollowers/:id`
      }
      ,
      {
        source:"/api/get/fetchFollowing/:id",
        destination:`${SERVER_URL}/api/get/getSingleUserFollowing/:id`
      }
      ,
      {
        source:"/api/get/fetchFollowing",
        destination:`${SERVER_URL}/api/get/followingFeed`
      }
    ]
  },
}
