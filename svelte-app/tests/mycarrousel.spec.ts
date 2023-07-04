import {expect, test} from "@playwright/test";

test.describe('My Carrousel', () => {
    test('should have the correct title', async ({page}) => {
        // Act
        await page.goto('http://localhost:8888/presta-shop/qc/')

        // Assert
        const myCarrouselTitle = await page.getByRole('heading', {name: 'My Carrousel', level: 2})

        await expect(myCarrouselTitle).toBeVisible()
    })
})