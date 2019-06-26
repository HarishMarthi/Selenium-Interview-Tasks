package com.hover.details;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "res/featureFiles", glue = "com/hover/details/steps", plugin = {
		"html:res/reports/cucumber-reports" })
public class TestRunner {

}
