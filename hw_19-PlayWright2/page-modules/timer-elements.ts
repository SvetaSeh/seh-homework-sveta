import {Locator, Page} from "@playwright/test";


export class TimerElements {
   
    public goTo(): void {
        this.page.goto('https://timers.jocho.sk/');
    }

    public get controlsElement(): Locator {
        return this.page.locator('div [class="controls"]');
    }

    public get addButton(): Locator {
        return this.page.locator('button[class="button button--add"]');
    }

    public get toggleButton(): Locator {
        return this.page.locator('button[class="button button--toggle"]');
    }

    public get resetButton(): Locator {
        return this.page.locator('button[class="button button--reset"]');
    }

    public get deleteButton(): Locator {
        return this.page.locator('button[class="button button--theme"]');
    }

    public get inputName(): Locator {
        return this.page.locator('input[class="timer__name"]');
    }

    public get timerList(): Locator {
        return this.page.locator('div[data-id="0"]');
    }

    constructor(private page: Page) {
        this.page = page;
    }
    

}
