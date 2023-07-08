 import React from "react";
 import Comment from "./Comment";

const comments = [
    {
        name : "이인제",
        comment : "안녕하세요. 소풀입니다.",
    },
    {
        name : "이인제1",
        comment : "안녕하세요. 소풀입니다.1",
    },
    {
        name : "이인제2",
        comment : "안녕하세요. 소풀입니다.2",
    }
];

 function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
 }

 export default CommentList;