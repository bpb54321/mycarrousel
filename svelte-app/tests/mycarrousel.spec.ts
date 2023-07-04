import {expect, test} from "@playwright/test";

test.describe('My Carrousel', () => {
    test('should have the correct title', async ({page}) => {
        // Act
        await page.goto('http://localhost:8888/presta-shop/qc/')

        // Assert
        const myCarrouselTitle = await page.getByRole('heading', {name: 'My Carrousel', level: 2})

        await expect(myCarrouselTitle).toBeVisible()
    })
    test('should display the correct images', async ({page}) => {
        // Act
        await page.goto('http://localhost:8888/presta-shop/qc/')

        // Assert
        const recommendationsCarrousel = await page.getByTestId('my-carrousel').filter({ hasText: 'Nos recommandations' })
        await expect(recommendationsCarrousel).toBeVisible()

        const carrouselHeading = await recommendationsCarrousel.getByRole('heading', {name: 'Nos recommandations', level: 2})
        await expect(carrouselHeading).toBeVisible()

        const image = await recommendationsCarrousel.getByAltText('Deux femmes qui dansent')

        await expect(image).toHaveAttribute('src', 'https://images.ctfassets.net/tacg73mas1jx/1J4L9xGRfwEB7wIU53jI8r/86349fc8428647621275241e817e3849/SLIDER_-_FESTIVAL_FR.jpg')
    })
})