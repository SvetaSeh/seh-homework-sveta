import { Post, PostSummary } from '../src/interfaces';
import { expect } from '@jest/globals';

describe('PostSummary', () => {
    test('коректно обрізає ім\'я, якщо більше 10 символів', () => {
        const post: Post = {
            postId: 1,
            id: 1,
            name: 'Дуже довге ім\'я для тесту',
            email: 'test@example.com',
            body: 'Текст коментаря'
        };
        const summary = new PostSummary(post);

        expect(summary.shortName).toBe('Дуже довге...');
    });

    test('не обрізає ім\'я, якщо 10, менше символів', () => {
        const post: Post = {
            postId: 1,
            id: 1,
            name: 'Коротке',
            email: 'test@example.com',
            body: 'Текст коментаря'
        };
        const summary = new PostSummary(post);

        expect(summary.shortName).toBe('Коротке...');
    });

    test('правильно рахує довжину body', () => {
        const post: Post = {
            postId: 1,
            id: 1,
            name: 'Test',
            email: 'test@example.com',
            body: '12345'
        };
        const summary = new PostSummary(post);

        expect(summary.shortName).toBe(5);
    });
});
