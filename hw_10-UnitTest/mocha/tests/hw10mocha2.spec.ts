import { expect } from 'chai';
import { Post, PostSummary } from '../src/post';

describe('PostSummary', () => {
    it('коректно обрізає ім\'я, якщо більше 10 символів', () => {
        const post: Post = {
            postId: 1,
            id: 1,
            name: 'Дуже довге ім\'я для тесту',
            email: 'test@example.com',
            body: 'Текст коментаря'
        };
        const summary = new PostSummary(post);

        expect(summary.getSummary().shortName).to.equal('Дуже довге...');
    });

    it('не обрізає ім\'я, якщо 10 або менше символів', () => {
        const post: Post = {
            postId: 1,
            id: 1,
            name: 'Коротке',
            email: 'test@example.com',
            body: 'Текст коментаря'
        };
        const summary = new PostSummary(post);

        expect(summary.getSummary().shortName).to.equal('Коротке');
    });

    it('правильно рахує довжину body', () => {
        const post: Post = {
            postId: 1,
            id: 1,
            name: 'Тест',
            email: 'test@example.com',
            body: '12345'
        };
        const summary = new PostSummary(post);

        expect(summary.getSummary().bodyLength).to.equal(5);
    });
});
