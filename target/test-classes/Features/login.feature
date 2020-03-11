Feature:User should not  login  with invalid credential

  Background:
    Given User is on login page

  @login
  Scenario Outline:User should not be able login with invalid credentials
    When User enter username as "<username>"and  password as a "<password>"
    And User click on login
    Then user should see "<errorMessage>"
    Examples:
      | username | password  | errorMessage             |
      | Admin    | admin1234 | Invalid credentials      |
      | Admin1   | admin123  | Invalid credentials      |
      | Admin    |           | Password cannot be empty |
      |          | admin123  | Username cannot be empty |
      | Admin1   |           | Password cannot be empty |
      |          | admin1234 | Username cannot be empty |
      |          |           | Username cannot be empty |
      | Admin1   | admin1234 | Invalid credentials      |