import { gql, useQuery, useMutation } from '@apollo/client';

function App() {


  //  an example of a get query
  const GET_POST = gql`
    query {
      posts {
        data {
          id
          title
          body
        }
      }
    }`;

  const {loading, error, data} = useQuery(GET_POST)
  
  // using data to render posts
  let posts

  if (!loading) {
    console.log('data:', data)
    posts = data.posts.data.map(post => {
      return <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    })
  }


  // an example of a post
  const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        body
      }
    }`;

  const createPostInput = {
    title: "A Very Captivating Post Title",
    body: "Some interesting content."
  };

  const [createPost] = useMutation(CREATE_POST);

  const handleCreatePost = () => {
    createPost({
      variables: {
        input: createPostInput,
      },
    })
    .then(res => console.log('post response:', res))
  };  

  return (
    <div className="App">
      {!loading && 
        <>
          <button onClick={handleCreatePost}>
            create post
          </button>
          {posts}
        </>
      }
    </div>
  );
}

export default App;
