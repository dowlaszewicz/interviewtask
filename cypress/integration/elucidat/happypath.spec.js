/// <reference types="cypress" />

context('Happy Path', () => {
    // Select the 1st case
    it('should select the case', () => {
        cy.visit('https://learning.elucidat.com/course/5c9126fd760e5-60ba4c3fe8135')
        
        cy.get('h1.projectTitle').should('contain','FINDING THE TRUTH');
        cy.get('.add_option_button a.button').click() 
        cy.get('#pa_5c9126fe3f4fb_p179d7b273e1-link--imgCard-1').click()
        cy.get('#pa_5c9126fe434ba_p1557cb3bfec-video').should('have.class','video e-has-video e-video-completed')
    });

    // Click on Judge button and check if two vote options are visible
    it('judge the case', () => {
        cy.get('#pa_5c9126fe434ba_p15564daa856-button__text').should('contain', 'JUDGE THIS').click()
        cy.get('form[id="pa_5c9126fe47260_p15515116385-form--scq"]').invoke('text').then(form =>{
        expect(form).contains('Guilty' && 'Not guilty')
        })
    });

    // Click guilty and click vote, check if 1st radio button is checked and second remain unchecked, then check if text You think Kevin is guilty appears.
    it('guilty or not guilty', () => {
        cy.get('form[id="pa_5c9126fe47260_p15515116385-form--scq"]').find('[type="radio"]').then(radioButtons => {
        cy.wrap(radioButtons).first().check({force:true})
        .should('be.checked')
        cy.wrap(radioButtons).eq(1).should('not.be.checked')
        })
        cy.get('#pa_5c9126fe47260_p15515116385-button__text').click()
        cy.get('#pa_5c9126fe47260_p1554e607e46-modal__text__wrapper').should('contain', 'You think Kevin is guilty.')
        cy.get('#pa_5c9126fe47260_p15583b88249-button__text').should('contain', 'CONTINUE')
    });
    
    //Click continue, then confirm there are 6 explore evidence buttons
    it('guilty approval', () => {
        cy.get('#pa_5c9126fe47260_p15583b88249-button__text').click()
        cy.get('#pa_5c9126fe4b742_p1554fa6d6c6-explorer__inner').find('i[class="ti ti-magnify"]').then(explorer =>{
        const evidenceAmount = explorer.length
        expect(evidenceAmount).to.equal(6)
        })
    });
    
    // CLick on the top explore button, then confirm that pop up window with the "FOOTPRINTS" text appears
    it('check the evidence', () => {
        cy.get('#pa_5c9126fe4b742_p1554fa6d6c6-explorer__inner').find('i[class="ti ti-magnify"]').eq(1).click()
        cy.get('h2#pa_5c9126fe4b742_p1554fa6d7d7-modalTitle-2').should('contain','FOOTPRINTS')
        cy.get('#pa_5c9126fe4b742_p15583bfb7a0-button__text-2').should('contain', 'CLOSE')
    });
    
    // Click on the Close button
    it('close the evidence', () => {
        cy.get('#pa_5c9126fe4b742_p15583bfb7a0-button__text-2').click()
    });
    
    // Click on the Continue button, confirm the text "There seems to be quite of evidence suggesting that Kevin is guilty" exists
    it('continue', () => {
        cy.get('#pa_5c9126fe4b742_p15550a254a1-button__text').click()
        cy.get('#pa_5c9126fe4f952_p15507291710-textWrapper').should('contain', 'There seems to be quite a bit of evidence suggesting that Kevin is guilty.')
    });
    
    // Click on the Continue button, you should see the page with 4 radio buttons
    it('You decide', () => {
        cy.get('#pa_5c9126fe4f952_p15578944323-button__text').click()
        cy.get('#pa_5c9126fe5331b_p155cc4e94a5-answerGrid__inner').find('[class="card imageCard answer e-card--medium e-image_type--landscape"]').then(evidenceRadio => {
        const evidenceButton = evidenceRadio.length
        expect(evidenceButton).to.equal(4)
        })
    });
    
    //Click on the last radio button, confirm that area around selected radio button is framed
    it('radio buttons', () => {
        cy.get('#pa_5c9126fe5331b_p155cc4e94a5-answerGrid__inner').find('[class="card imageCard answer e-card--medium e-image_type--landscape"]').eq(3).then(radioSelected => {
            cy.wrap(radioSelected).click()
            cy.wrap(radioSelected).should('have.class', 'card imageCard answer e-card--medium e-image_type--landscape selected')
        })    
    });
     
    //Click on the Vote button, window with text "Our experts disagrees" should be visible
    it('fingerprint evidence vote', () => {
       cy.get('#pa_5c9126fe5331b_p155cc4e94a5-button__text').click()
       cy.get('#pa_5c9126fe5331b_p155cc4e96fb-modalTitle').should('contain', 'Our expert disagrees')
    });
    
    // CLick on the Continue button, text "THE DNA' should be vidible in the header"
    it('fingerprint continue', () => {
        cy.get('#pa_5c9126fe5331b_p155cc4e970b-button__text').click()
        cy.get('#pr_5c9126fd760e5_p155729036fa-page__title').should('contain','THE DNA')
    });
    
    // Click on the First Flip card, confirm that text contains "You can't argue with DNA evidence"
    it('the DNA evidence note', () => {
        cy.get('#pa_5c9126fe57197_p15578a164ba-button__text-front').click()
        cy.get('#pa_5c9126fe57197_p15578a165c1-text').should('contain', 'You can’t argue with DNA evidence.')
    });
    
}) 