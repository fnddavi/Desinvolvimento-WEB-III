import { Header, Title, Logo } from "../components";
import SearchForm from "../components/SearchForm";
import PostList from "../components/PostList";
import { PostProvider } from "../contexts/Contexto";

export default function PostPage() {
  return (
    <PostProvider>
      <div>
        <Header>
          <Title>Prova</Title>
          <Logo />
        </Header>
        <SearchForm />
        <PostList />
      </div>
    </PostProvider>
  );
}
