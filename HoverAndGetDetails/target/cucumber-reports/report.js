$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HoverImageReadDetails.feature");
formatter.feature({
  "line": 2,
  "name": "Hover images and read user details",
  "description": "",
  "id": "hover-images-and-read-user-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HoverImages"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify user details when user hover the images",
  "description": "",
  "id": "hover-images-and-read-user-details;verify-user-details-when-user-hover-the-images",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@HoverImages"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launch the hover application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The page is loaded successfully",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User verify the hovers header text as \u003choverHeader\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Verify the hovers description text as \u003cdescriptionText\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User hovers the mouse on image one",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Verify the user one name as \u003cuserNameOne\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User hovers the mouse on image two",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Verify the user two name as \u003cuserNameTwo\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User hovers the mouse on image three",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Verify the user three  name as \u003cuserNameThree\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Verify powered by text as \u003cpoweredByText\u003e below the images section",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "hover-images-and-read-user-details;verify-user-details-when-user-hover-the-images;",
  "rows": [
    {
      "cells": [
        "hoverHeader",
        "descriptionText",
        "userNameOne",
        "userNameTwo",
        "userNameThree",
        "poweredByText"
      ],
      "line": 19,
      "id": "hover-images-and-read-user-details;verify-user-details-when-user-hover-the-images;;1"
    },
    {
      "cells": [
        "Hovers",
        "Hover over the image for additional information",
        "name: user1",
        "name: user2",
        "name: user3",
        "Powered by Elemental Selenium"
      ],
      "line": 20,
      "id": "hover-images-and-read-user-details;verify-user-details-when-user-hover-the-images;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user details when user hover the images",
  "description": "",
  "id": "hover-images-and-read-user-details;verify-user-details-when-user-hover-the-images;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HoverImages"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launch the hover application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The page is loaded successfully",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User verify the hovers header text as Hovers",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Verify the hovers description text as Hover over the image for additional information",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User hovers the mouse on image one",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Verify the user one name as name: user1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User hovers the mouse on image two",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Verify the user two name as name: user2",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User hovers the mouse on image three",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Verify the user three  name as name: user3",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Verify powered by text as Powered by Elemental Selenium below the images section",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HoverAndReadSteps.user_launch_the_hover_application()"
});
formatter.result({
  "duration": 12919097773,
  "status": "passed"
});
formatter.match({
  "location": "HoverAndReadSteps.the_page_is_loaded_successfully()"
});
formatter.result({
  "duration": 44032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hovers",
      "offset": 38
    }
  ],
  "location": "HoverAndReadSteps.user_verify_the_hovers_header_text(String)"
});
formatter.result({
  "duration": 2287879974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hover over the image for additional information",
      "offset": 43
    }
  ],
  "location": "HoverAndReadSteps.user_Verify_the_hovers_description_text(String)"
});
formatter.result({
  "duration": 2201286862,
  "status": "passed"
});
formatter.match({
  "location": "HoverAndReadSteps.user_hovers_the_mouse_on_image_one()"
});
formatter.result({
  "duration": 2247213309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name: user1",
      "offset": 33
    }
  ],
  "location": "HoverAndReadSteps.user_Verify_the_user_one_name(String)"
});
formatter.result({
  "duration": 4236489970,
  "status": "passed"
});
formatter.match({
  "location": "HoverAndReadSteps.user_hovers_the_mouse_on_image_two()"
});
formatter.result({
  "duration": 2293190956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name: user2",
      "offset": 33
    }
  ],
  "location": "HoverAndReadSteps.user_Verify_the_user_two_name(String)"
});
formatter.result({
  "duration": 4278670110,
  "status": "passed"
});
formatter.match({
  "location": "HoverAndReadSteps.user_hovers_the_mouse_on_image_three()"
});
formatter.result({
  "duration": 2292260652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name: user3",
      "offset": 36
    }
  ],
  "location": "HoverAndReadSteps.user_Verify_the_user_three_name(String)"
});
formatter.result({
  "duration": 4299163442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Powered by Elemental Selenium",
      "offset": 31
    }
  ],
  "location": "HoverAndReadSteps.user_Verify_powered_by_text_below_the_images_section(String)"
});
formatter.result({
  "duration": 4289713448,
  "status": "passed"
});
});