import React from 'react'
import Comment from './Comment'
import CommentsList from './CommentsList'

const commentsData = [
    {
        name:"Deepak Gupta",
        text: "lorem ipsum dolor sit amet,consecuter adip",
        replies:[]
    },
    {
        name:"Deepak Gupta",
        text: "lorem ipsum dolor sit amet,consecuter adip",
        replies:[{
            name:"Deepak Gupta",
            text: "lorem ipsum dolor sit amet,consecuter adip",
            replies:[ {
                name:"Deepak Gupta",
                text: "lorem ipsum dolor sit amet,consecuter adip",
                replies:[  {
                    name:"Deepak Gupta",
                    text: "lorem ipsum dolor sit amet,consecuter adip",
                    replies:[ {
                        name:"Deepak Gupta",
                        text: "lorem ipsum dolor sit amet,consecuter adip",
                        replies:[ ]
                    }, {
                        name:"Deepak Gupta",
                        text: "lorem ipsum dolor sit amet,consecuter adip",
                        replies:[  {
                            name:"Deepak Gupta",
                            text: "lorem ipsum dolor sit amet,consecuter adip",
                            replies:[ ]
                        },]
                    }, ]
                }, {
                    name:"Deepak Gupta",
                    text: "lorem ipsum dolor sit amet,consecuter adip",
                    replies:[ ]
                },]
            },]
        }, {
            name:"Deepak Gupta",
            text: "lorem ipsum dolor sit amet,consecuter adip",
            replies:[ ]
        },]
    },
    {
        name:"Deepak Gupta",
        text: "lorem ipsum dolor sit amet,consecuter adip",
        replies:[]
    },
    {
        name:"Deepak Gupta",
        text: "lorem ipsum dolor sit amet,consecuter adip",
        replies:[]
    },
    {
        name:"Deepak Gupta",
        text: "lorem ipsum dolor sit amet,consecuter adip",
        replies:[]
    },
    {
        name:"Deepak Gupta",
        text: "lorem ipsum dolor sit amet,consecuter adip",
        replies:[]
    },
    {
        name:"Deepak Gupta",
        text: "lorem ipsum dolor sit amet,consecuter adip",
        replies:[]
    },
] 



const CommentsContainer = () => {
  return (
    <div className='mt-5'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      {/* <Comment data={commentsData[0]}/> */}
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
