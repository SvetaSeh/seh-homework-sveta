export interface Post {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export class PostSummary {
    public postId: number;
    public shortName: string;
    public email: string;
    public bodyLength: number;

    public constructor(post: Post) {
        this.postId = post.postId;
        this.shortName = post.name.length > 10 ? post.name.substring(0, 10) + '...' : post.name;
        this.email = post.email;
        this.bodyLength = post.body.length;
    }
};
