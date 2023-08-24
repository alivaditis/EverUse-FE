import { gql, useQuery, useMutation } from '@apollo/client';
import './App.css';

function App() {


  //  an example of a get query
  const GET_POST = gql`
    query {
      post(id: 1) {
        id
        title
        body
      }
    }`;

  const {loading, error, data} = useQuery(GET_POST)
  {!loading && console.log(data)}

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

  const [createPost, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(CREATE_POST);

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
          <h1>{data.post.title}</h1>
          <p>{data.post.body}</p>
          <button onClick={handleCreatePost}>
            create post
          </button>
        </>
      }
    </div>
  );
}

export default App;
