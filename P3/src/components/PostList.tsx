import React from 'react';
import styled from 'styled-components';
import { usePostContext } from '../contexts/Contexto';

const PostList = () => {
  const { posts, error } = usePostContext();

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!posts) {
    return <div>No posts available.</div>;
  }

  return (
    <ListWrapper>
      {posts.items.map((post) => (
        <PostItem key={post.post_id}>
          <div>{post.owner.display_name}</div> {/* Coluna Nome */}
          <div>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </div> {/* Coluna Postagem */}
          <div>{new Date(post.creation_date * 1000).toLocaleDateString()}</div> {/* Coluna Data */}
        </PostItem>

      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;



const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
`;

const PostItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; /* Ajusta a proporção da primeira coluna */
  background-color: #333; /* Fundo cinza escuro */
  color: white; /* Letras em branco */
  gap: 2px; /* Mantém o valor reduzido para as colunas ficarem mais próximas */
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555; /* Mudança de cor no hover */
  }
`;

export default PostList;
