export interface Post {
    id: number,
    title: string;
    body: string;
}

export interface PostsListState {
    posts: Post[];
    error: Error | null;
}