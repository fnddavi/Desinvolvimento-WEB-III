export interface PostContextProps {
  posts: PageProps | null;
  error: string | null;
  getPosts: (page: number, fromdate: number, todate: number) => Promise<void>;
  setError: (value: string | null) => void;
}

export interface PostProps {
  owner: OwnerProps;
  score: number;
  last_activity_date: number;
  creation_date: number;
  post_type: string;
  post_id: number;
  content_license: string;
  link: string;
  title: string;
}

export interface PageProps {
  items: PostProps[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  
}

interface OwnerProps {
  account_id: number;
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface ErrorProps {
  message: string;
}
