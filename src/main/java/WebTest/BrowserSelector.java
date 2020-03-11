package WebTest;




import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import static WebTest.BasePage.driver;

public class BrowserSelector extends Utils
{

        //String browser = "chrome";

        public void setUpBrowser(){
            LoadProp loadProp = new LoadProp();
            String browser = loadProp.getProperty("browser");

            if (browser.equalsIgnoreCase("chrome")) {
                System.setProperty("webdriver.chrome.driver", "src/test/Resources/BrowserDriver/chromedriver.exe");
                driver = new ChromeDriver();
                driver.manage().window().maximize();
                driver.get(loadProp.getProperty("url"));
            }else if (browser.equalsIgnoreCase("firefox")) {
                System.setProperty("webdriver.gecko.driver", "src/test/Resources/BrowserDriver/geckodriver.exe");
                driver = new FirefoxDriver();
                driver.manage().window().maximize();
                driver.get("https://opensource-demo.orangehrmlive.com/");
            }else if(browser.equalsIgnoreCase("ie"))
            {
                System.setProperty("webdriver.ie.driver", "src/test/Resources/BrowserDriver/IEDriverServer.exe");

                DesiredCapabilities ieCapabilities = DesiredCapabilities.internetExplorer();

                ieCapabilities.setCapability("nativeEvents", false);
                ieCapabilities.setCapability("unexpectedAlertBehaviour", "accept");
                ieCapabilities.setCapability("ignoreProtectedModeSettings", true);
                ieCapabilities.setCapability("disable-popup-blocking", true);
                ieCapabilities.setCapability("enablePersistentHover", true);
                ieCapabilities.setCapability("ignoreZoomSetting", true);


                driver =new InternetExplorerDriver(ieCapabilities);

                driver.manage().window().maximize();

                driver.get("https://opensource-demo.orangehrmlive.com/");

            }else {
                System.out.println("hello"+browser);
            }



            try{
                Thread.sleep(2000);
            }catch (InterruptedException e){
                e.printStackTrace();
            }

        }
        public void closeBrowser(){


            driver.close();
        }

    }



