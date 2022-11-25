import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Section2 from "../../../components/section2";
import data from "../../api/data";

// api/posts/1
export default function Index() {
  const router = useRouter();
  const { Posts } = data;
  const [post, setPost] = useState<any>()

  useEffect(() => {
    const { postId } = router.query;
    console.log(postId)
    if (postId) {
      const newPost = Posts.find(value => value.id === parseInt(postId.toString()))
      setPost(newPost);
    }
  }, [])

  return <Section2 />
}