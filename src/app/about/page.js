

import CardAbout from '@/components/CardAbout'


// async function loadPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }




async function  pageAbout() {

  // const posts = await loadPosts();

  // console.log(posts)

  return (
    <>
      
      <CardAbout />




          {/* 
        {posts.map(post => (
          <h1>{post.title}</h1>
        )
        )}
          


        <Button />        */}
    </>
  )
}

export default pageAbout