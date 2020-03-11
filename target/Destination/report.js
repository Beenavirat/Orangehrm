$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "User should not  login  with invalid credential",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"\u003cusername\u003e\"and  password as a \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should see \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 12,
      "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "admin1234",
        "Invalid credentials"
      ],
      "line": 13,
      "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "Admin1",
        "admin123",
        "Invalid credentials"
      ],
      "line": 14,
      "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 15,
      "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 16,
      "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;5"
    },
    {
      "cells": [
        "Admin1",
        "",
        "Password cannot be empty"
      ],
      "line": 17,
      "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;6"
    },
    {
      "cells": [
        "",
        "admin1234",
        "Username cannot be empty"
      ],
      "line": 18,
      "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;7"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 19,
      "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;8"
    },
    {
      "cells": [
        "Admin1",
        "admin1234",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14714482600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 128225700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"Admin\"and  password as a \"admin1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    },
    {
      "val": "admin1234",
      "offset": 50
    }
  ],
  "location": "MyStepdefs.userEnterUsernameAsAndPasswordAsA(String,String)"
});
formatter.result({
  "duration": 207416000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1069831600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSee(String)"
});
formatter.result({
  "duration": 72811900,
  "status": "passed"
});
formatter.after({
  "duration": 144600,
  "status": "passed"
});
formatter.before({
  "duration": 13380273500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 84900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"Admin1\"and  password as a \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin1",
      "offset": 24
    },
    {
      "val": "admin123",
      "offset": 51
    }
  ],
  "location": "MyStepdefs.userEnterUsernameAsAndPasswordAsA(String,String)"
});
formatter.result({
  "duration": 243188800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1218651600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSee(String)"
});
formatter.result({
  "duration": 91569200,
  "status": "passed"
});
formatter.after({
  "duration": 72300,
  "status": "passed"
});
formatter.before({
  "duration": 13741209500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"Admin\"and  password as a \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should see \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    },
    {
      "val": "",
      "offset": 50
    }
  ],
  "location": "MyStepdefs.userEnterUsernameAsAndPasswordAsA(String,String)"
});
formatter.result({
  "duration": 138071400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "duration": 64280000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSee(String)"
});
formatter.result({
  "duration": 31579900,
  "status": "passed"
});
formatter.after({
  "duration": 29300,
  "status": "passed"
});
formatter.before({
  "duration": 13068660800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 157100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"\"and  password as a \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should see \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "admin123",
      "offset": 45
    }
  ],
  "location": "MyStepdefs.userEnterUsernameAsAndPasswordAsA(String,String)"
});
formatter.result({
  "duration": 368269800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "duration": 119204000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSee(String)"
});
formatter.result({
  "duration": 58506500,
  "status": "passed"
});
formatter.after({
  "duration": 49100,
  "status": "passed"
});
formatter.before({
  "duration": 13102274000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 111500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"Admin1\"and  password as a \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should see \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin1",
      "offset": 24
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "MyStepdefs.userEnterUsernameAsAndPasswordAsA(String,String)"
});
formatter.result({
  "duration": 474463800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "duration": 110911900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSee(String)"
});
formatter.result({
  "duration": 33512800,
  "status": "passed"
});
formatter.after({
  "duration": 23500,
  "status": "passed"
});
formatter.before({
  "duration": 13567975600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 73300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"\"and  password as a \"admin1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should see \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "admin1234",
      "offset": 45
    }
  ],
  "location": "MyStepdefs.userEnterUsernameAsAndPasswordAsA(String,String)"
});
formatter.result({
  "duration": 187735200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "duration": 63622100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSee(String)"
});
formatter.result({
  "duration": 32240100,
  "status": "passed"
});
formatter.after({
  "duration": 30000,
  "status": "passed"
});
formatter.before({
  "duration": 13708659800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 71200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"\"and  password as a \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should see \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "MyStepdefs.userEnterUsernameAsAndPasswordAsA(String,String)"
});
formatter.result({
  "duration": 304841400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "duration": 99327100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSee(String)"
});
formatter.result({
  "duration": 48637300,
  "status": "passed"
});
formatter.after({
  "duration": 42800,
  "status": "passed"
});
formatter.before({
  "duration": 13298903500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should not be able login with invalid credentials",
  "description": "",
  "id": "user-should-not--login--with-invalid-credential;user-should-not-be-able-login-with-invalid-credentials;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enter username as \"Admin1\"and  password as a \"admin1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin1",
      "offset": 24
    },
    {
      "val": "admin1234",
      "offset": 51
    }
  ],
  "location": "MyStepdefs.userEnterUsernameAsAndPasswordAsA(String,String)"
});
formatter.result({
  "duration": 174328100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnLogin()"
});
formatter.result({
  "duration": 587969700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSee(String)"
});
formatter.result({
  "duration": 81952900,
  "status": "passed"
});
formatter.after({
  "duration": 181600,
  "status": "passed"
});
});