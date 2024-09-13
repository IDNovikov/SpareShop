import React, { useContext } from "react";
import { Context } from "..";
import PostItem from "./PostItem/PostItem";
import { observer } from "mobx-react-lite";
import GreyButton from "./UI/greyButton/GreyButton";

const PostList = observer((props) => {
  const { blog } = useContext(Context);

  return (
    <div>
      {blog.posts.map((post) => (
        <div>
          <PostItem key={post.id} post={post} />
          {props.postDelete && (
            <div onClick={() => props.postDelete(post.id)}>
              <GreyButton
                height={"42px"}
                width={"40px"}
                text={"Delete"}
                fontSize={"14px"}
                fontColor={"Black"}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

export default PostList;
