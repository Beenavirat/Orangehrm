package WebTest;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {

    LoginPage loginPage = new LoginPage();
    @Given("^User is on login page$")
    public void userIsOnLoginPage() {
    }

    @When("^User enter username as \"([^\"]*)\"and  password as a \"([^\"]*)\"$")
    public void userEnterUsernameAsAndPasswordAsA(String username, String password)
    {
        loginPage.userenterlogindetails(username, password);
    }

    @And("^User click on login$")
    public void userClickOnLogin() {
        loginPage.clickonloginbutton();
    }

    @Then("^user should see \"([^\"]*)\"$")
    public void userShouldSee(String errorMessage) {
        loginPage.userShouldSeeErrorMessage(errorMessage);
    }
}
