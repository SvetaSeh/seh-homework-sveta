import { Post, PostSummary } from '../src/interfaces.ts';

describe('PostSummary', () => {
    test('коректно обрізає ім\'я, якщо більше 10 символів', () => {
        const post: Post = {
            postId: 1,
            id: 1,
            name: 'Дуже довге ім\'я для тесту',
            email: 'test@example.com',
            body: 'Текст коментаря',
        };
        const summary = new PostSummary(post);

        expect((summary as any).shortName).toBe('Дуже довге...');
    });

    test('не обрізає ім\'я, якщо 10 або менше символів', () => {
        const post: Post = {
            postId: 1,
            id: 1,
            name: 'Коротке',
            email: 'test@example.com',
            body: 'Текст коментаря',
        };
        const summary = new PostSummary(post);

        expect((summary as any).shortName).toBe('Коротке');
    });

    test('правильно рахує довжину body', () => {
        const post: Post = {
            postId: 1,
            id: 1,
            name: 'Тест',
            email: 'test@example.com',
            body: '12345',
        };
        const summary = new PostSummary(post);

        expect((summary as any).bodyLength).toBe(5);
    });
});
