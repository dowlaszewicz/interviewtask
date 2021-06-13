Feature: Happy Path

Feature: Select the case
Given User is on main page 
And User clicked the start
When User click the first case
Then User should see the video displayed

Feature: Judge the case
Given The user is on site with video
When User click Judge This button
Then User should see page with two check boxes 

Feature: Guilty or Not Guilty
Given The user is on page with 2 check boxes
When User click Guilty
And User click Vote 
And the "You think Kevin is guilty" message should displayed
And Continue button is displayed

Feature: Guilty approval
Given The user is on site with the "You think Kevin is guilty" message 
When User click Continue
Then User should see page with 6 explore buttons

Feature: Check the evidence
Given The user is on site with the 6 explore evidence buttons
When User click top explore button
Then User should see pop up window with the "FOOTPRINTS" text
And User should see CLOSE button

Feature: Close the evidence
Given The user is on pop up window with CLOSE button
When The user click the CLOSE button
Then User should see page with 6 explore buttons


Feature: Continue
Given The user is on page with 6 explore buttons
When The user click the CONTINUE button
Then User should see page with text "There seems to be quite of evidence suggesting that Kevin is guilty"

Feature: You decide
Given The user is on page with page with text "There seems to be quite of evidence suggesting that Kevin is guilty"
When The user click the CONTINUE button
Then User should see page with 4 radio buttons

Feature: Radio buttons
Given The user is on page with 4 radio buttons
When User click on last radio button
Then Last radio button should become framed

Feature: Fingerprint evidence vote
Given The user is on page with 4 radio buttons and last radio button is framed
When User click on Vote button
Then User should see pop up window with text "Our expert disagrees..."

Feature: Fingerprint continue
Given The user is on pop up window with text "Our expert disagrees..."
When User click on CONTINUE button
Then User should see page with "THE DNA" text

Feature: The DNA evidence vote
Given The user is on page with "THE DNA" text
When User click on first flip card button
Then User should see text contains "You can't argue with DNA evidence"






