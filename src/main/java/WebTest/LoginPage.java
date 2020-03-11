package WebTest;

import org.openqa.selenium.By;

public class LoginPage extends Utils {

private By _username = By.xpath("//input[@id=\"txtUsername\"]");

private By _password = By.xpath(" //input[@type=\"password\"]");
private By _loginbutton    =By.xpath("//input[@ id=\"btnLogin\"]");
private By _actual  = By.id("spanMessage");

    public void userenterlogindetails (String username,String password){
       sendText(_username,username);
       sendText(_password,password);

    }

    public void clickonloginbutton()
    {
          clickOnElement(_loginbutton);
    }
 public void userShouldSeeErrorMessage(String errorMessage){
        String expected = errorMessage;
        assertTextMessage("user cannot see",expected,_actual);

 }

}
