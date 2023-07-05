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

        const expectedAltTexts = [
            "Deux femmes qui dansent",
            "Un homme qui court sur un pont",
            "Un enfant qui fait du vélo à la campagne",
            "Une fille qui saute sur un trampoline",
            "Un groupe de femmes qui se parlent en costume de bain",
            "Vue de derrière d'un homme et d'une femme qui portent des sacs à dos",
            "Trois amis qui s'assoient sur leur planches à pagaie dans une crique",
            "Une femme met un matelas dans une tente",
            "Une femme s'assoit dans une tente",
            "Un gros plan du pied droit de quelqu'un portant une chaussure d'eau",
            "Un homme et une femme s'assoyant sur le bord d'une piscine avec des serviettes drapées sur leurs épaules",
            "Le visage d'une femme qui porte des luntettes de soleil avec le soleil qui se couche derrière elle"
        ]

        const expectedUrls = [
            'https://images.ctfassets.net/tacg73mas1jx/1J4L9xGRfwEB7wIU53jI8r/86349fc8428647621275241e817e3849/SLIDER_-_FESTIVAL_FR.jpg',
            'https://images.ctfassets.net/tacg73mas1jx/CG8U8nDLqEDtws1ms0qqc/895af2057f9d152a106aa1ec12fdb53a/SLIDER_LIQUIDATION_HOMME_FR.jpg'
        ]

        for (let i = 0; i < 2; i++) {
            const expectedAltText = expectedAltTexts[i]
            const expectedUrl = expectedUrls[i]
            const image = await recommendationsCarrousel.getByAltText(expectedAltText)
            await expect(image).toHaveAttribute('src', expectedUrl)
        }
    })
})