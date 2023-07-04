import {expect, test} from "@playwright/test";

test.describe('My Carrousel', () => {
    test('should have the correct title', async ({page}) => {
        // Act
        await page.goto('http://localhost:8888/presta-shop/qc/')

        // Assert
        const myCarrouselTitle = await page.getByRole('heading', {name: 'My Carrousel', level: 2})

        await expect(myCarrouselTitle).toBeVisible()
    })
    test('should display the correct images when the next button is clicked', async ({page}) => {
        // Arrange
        // Act
        await page.goto('https://www.decathlon.ca/fr')

        // Assert
        const recommandationsCarrousel = await page.getByTestId('CarouselLayout_wrapper').filter({ hasText: 'Nos recommandations' })
        await expect(recommandationsCarrousel).toBeVisible()

        const carrouselHeading = await recommandationsCarrousel.getByRole('heading', {name: 'Nos recommandations', level: 2})
        await expect(carrouselHeading).toBeVisible()

        // const image = await

            // https://images.ctfassets.net/tacg73mas1jx/1J4L9xGRfwEB7wIU53jI8r/86349fc8428647621275241e817e3849/SLIDER_-_FESTIVAL_FR.jpg
    })
})