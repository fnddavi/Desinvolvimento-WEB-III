import React, { createContext, useState, useContext, ReactNode } from 'react';
import post from '../services/Post';
import { PostContextProps, PageProps } from '../types';

const PostContext = createContext<PostContextProps | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<PageProps | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getPosts = async (page: number, fromDate: number, toDate: number) => {
        const fromTimestamp = Math.floor(new Date(fromDate).getTime() / 1000); // Convertendo para segundos
        const toTimestamp = Math.floor(new Date(toDate).getTime() / 1000); // Convertendo para segundos
        const result = await post.getPostsByPage(page, fromTimestamp, toTimestamp);
        if ('items' in result) {
            setPosts(result);
            setError(null);
        } else {
            setError(result.message);
        }
    };


    return (
        <PostContext.Provider value={{ posts, error, getPosts, setError }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => {
    const context = useContext(PostContext);
    if (context === undefined) {
        throw new Error('usePostContext must be used within a PostProvider');
    }
    return context;
};
