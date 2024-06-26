import PostPage from './pages/PostPage';
import { PostProvider } from './contexts/Contexto';

function App() {
  return (
    <PostProvider>
      <PostPage />
    </PostProvider>
  );
}

export default App;
