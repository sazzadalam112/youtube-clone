import React from 'react'

const commentData = [
    {
        name: "Sazzad alam",
        text: "this is the first comment",
        replies: [
            {
                name: "Sazzad alam",
                text: "this is the first comment",
                replies: [
                    {
                        name: "Sazzad alam",
                        text: "this is the first comment",
                        replies: []
                    },
                ]
            },
        ]
    },
    {
        name: "Sazzad alam",
        text: "this is the first comment",
        replies: [
            {
                name: "Sazzad alam",
                text: "this is the first comment",
                replies: [
                    {
                        name: "Sazzad alam",
                        text: "this is the first comment",
                        replies: []
                    },
                ]
            },
        ]
    },
    {
        name: "Sazzad alam",
        text: "this is the first comment",
        replies: [
            {
                name: "Sazzad alam",
                text: "this is the first comment",
                replies: [
                    {
                        name: "Sazzad alam",
                        text: "this is the first comment",
                        replies: [
                            {
                                name: "Sazzad alam",
                                text: "this is the first comment",
                                replies: []
                            },
                            {
                                name: "Sazzad alam",
                                text: "this is the first comment",
                                replies: [
                                    {
                                        name: "Sazzad alam",
                                        text: "this is the first comment",
                                        replies: [
                                            {
                                                name: "Sazzad alam",
                                                text: "this is the first comment",
                                                replies: []
                                            },
                                        ]
                                    },
                                ],
                            },

                        ]
                    }

                ]
            }

        ]
    },
    {
        name: "Sazzad alam",
        text: "OLD EMIWAY IS BACK? Meko Old Vibe Aa Raha Iss Song Se Maza aaya Bhai 🔥",
        replies: [
            {
                name: "Sazzad alam",
                text: "this is the first comment",
                replies: [
                    {
                        name: "Sazzad alam",
                        text: "this is the first comment",
                        replies: []
                    },
                ]
            },
        ]
    },
    {
        name: "Sazzad alam",
        text: "this is the first comment",
        replies: []
    },
    {
        name: "Sazzad alam",
        text: "this is the first comment",
        replies: []
    }
]
const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className=' shadow-sm bg-gray-200 w-50% p-2 rounded-lg my-2'>
            <img
                className='h-16 w-16'
                alt='user'
                src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'
            />
            <div className='px-5 text-xl '>
                <p className='font-bold text-2xl w-100'>@{name}</p>
                <p className='text-xl'>{text}</p>
            </div>
        </div>
    )
}

// const CommentList = ({comments}) =>{
// return comments.map((comment) => <Comment data = {comment} />);
// }
const CommentList = ({ comments }) => {
    return (
        comments.map((comment, index) => (
            <div key={index}>
                <Comment data={comment} />
                <div className='pl-10 border border-l-black ml-5'>
                    <CommentList comments={comment.replies} />
                </div>
            </div>
        ))
    )
}
const CommentsContainer = () => {
    return (
        <div className='md:px-24 md:pt-10'>
            <h1 className='text-4xl font-bold'>Comments:</h1>
            <CommentList comments={commentData} />
        </div>
    )
}

export default CommentsContainer
