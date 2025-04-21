import {test, expect} from '@playwright/test';
import {TimerElements} from '../page-modules/timer-elements';

test.describe('Timer Tests', () => {
    let timerElements: TimerElements;

    test.beforeEach(async ({page}) => {
        timerElements = new TimerElements(page);
        await timerElements.goTo();
    });

    test('Add Timer', async ({page}) => {
       await timerElements.addButton.click();
    });

    test('Toggle Timer', async ({page}) => {
        await timerElements.toggleButton.click();
    });

    test('Reset Timer', async ({page}) => {
        await timerElements.resetButton.click();
    });

    test('Delete Timer', async ({page}) => {
        await timerElements.deleteButton.click();
    });

    test('Input Timer Name', async ({page}) => {
        await timerElements.inputName.fill('Test Timer');
        const inputValue = await timerElements.inputName.inputValue();
        expect(inputValue).toBe('Test Timer');
    });
});
