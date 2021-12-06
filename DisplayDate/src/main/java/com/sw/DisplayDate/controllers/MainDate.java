package com.sw.DisplayDate.controllers;
import java.util.Date;
import java.util.DateTime;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainDate {
	@RequestMapping("/")
	public String Index() {
		
		
	}
	@RequestMapping("/time")
	public String Time() {
		Time time = new Time();
		return "";
	}
	@RequestMapping("/date")
	public String Date() {
		Date date = new Date();
		return ""'
	}
	

}
