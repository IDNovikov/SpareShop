import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOnePost } from "../../http/postsAPI";
import H2Medium from "../../components/UI/H2regular";
import { formatDate } from "../../hooks/formatDate";
import H1Medium from "../../components/UI/H1Medium";

const PostPage = () => {
  const [post, setPost] = useState({ info: [] });
  const [images, setImages] = useState([]);
  const { id } = useParams();

  const formatText = (text, maxLength) => {
    if (text.startsWith('"') && text.endsWith('"')) {
      text = text.slice(1, -1);
    }
    if (maxLength && text.length > maxLength) {
      text = text.slice(0, maxLength - 3) + "...";
    }
    console.log(text);
    return text;
  };

  useEffect(() => {
    fetchOnePost(id).then((data) => {
      setPost(data);
      let string = data.img;
      let str = string.replace(/[\"\[\]\\\\s]/g, "");
      let array = str.split(",");
      setImages(array);
    });
  }, []);

  return (
    <div>
      <div>
        {images.map((image) => (
          <img
            style={{ gridArea: "img" }}
            key={images.indexOf(image)}
            width={150}
            height={300}
            src={process.env.REACT_APP_API_URL + image}
          />
        ))}
      </div>
      <H2Medium
        align={"left"}
        size={"16px"}
        text={`${formatDate(post.createdAt)}`}
      />
      {post.tittle != "undefined" && (
        <H1Medium
          align={"left"}
          text={`${formatText(post.tittle)}`}
          size={"24px"}
          color={"#2D2D2D"}
        />
      )}
      {post.discription != "undefined" && (
        <H2Medium
          align={"left"}
          size={"16px"}
          text={`${formatText(post.discription)}`}
        />
      )}
    </div>
  );
};

export default PostPage;
