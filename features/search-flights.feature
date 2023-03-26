Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area

    Given user open browser
    When user access the WeFly airlines website
    And user see the website homepage 
    And user click flights
    And user fill radio button one-way/round-trip field with "one-way"
    And user fill from field with "Jakarta (JKTA)"
    And user fill to field with "Palembang (PLM)"
    And user fill No of passengers field with "1 Adult"
    And user fill Departure date with "Mar 29, 2023"
    And user fill Seat class with "Economy"
    And user click button search flights
    Then user should be able to search for flight tickets