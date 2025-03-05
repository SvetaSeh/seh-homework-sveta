import { expect } from 'chai';
import { describe, it } from 'mocha';

interface Post {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

class PostSummary {
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

    public getPostId(): number {
        return this.postId;
    }

    public getShortName(): string {
        return this.shortName;
    }

    public getEmail(): string {
        return this.email;
    }

    public getBodyLength(): number {
        return this.bodyLength;
    }
}

describe('PostSummary', () => {
    const mockPost = {
        postId: 1,
        id: 1,
        name: 'Long Post Name Test',
        email: 'test@example.com',
        body: 'This is a test body with some content.'
    };

    it('should correctly set postId', () => {
        const summary = new PostSummary(mockPost);
        expect(summary.getPostId()).to.equal(mockPost.postId);
    });

    it('should shorten name longer than 10 characters', () => {
        const summary = new PostSummary(mockPost);
        expect(summary.getShortName()).to.equal('Long Post ...');
    });

    it('should not shorten name if it is 10 characters or less', () => {
        const shortNamePost = { ...mockPost, name: 'ShortName' };
        const summary = new PostSummary(shortNamePost);
        expect(summary.getShortName()).to.equal('ShortName');
    });

    it('should correctly set email', () => {
        const summary = new PostSummary(mockPost);
        expect(summary.getEmail()).to.equal(mockPost.email);
    });

    it('should correctly calculate body length', () => {
        const summary = new PostSummary(mockPost);
        expect(summary.getBodyLength()).to.equal(mockPost.body.length);
    });
});
