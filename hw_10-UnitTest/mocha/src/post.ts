export interface Post {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export class PostSummary {
    private postId: number;
    private shortName: string;
    private email: string;
    private bodyLength: number;

    public constructor(post: Post) {
        this.postId = post.postId;
        this.shortName = post.name.length > 10 ? post.name.substring(0, 10) + '...' : post.name;
        this.email = post.email;
        this.bodyLength = post.body.length;
    }

    public getSummary(): { postId: number; shortName: string; email: string; bodyLength: number } {
        return {
            postId: this.postId,
            shortName: this.shortName,
            email: this.email,
            bodyLength: this.bodyLength
        };
    }
}

export async function newPost(): Promise<Post> {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    const json = (await response.json()) as Post;
    return json;
}
