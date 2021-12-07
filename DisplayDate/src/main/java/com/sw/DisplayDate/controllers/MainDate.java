package com.sw.DisplayDate.controllers;


import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainDate {
	@RequestMapping("/")
	public String Index() {
		return "displaydatetime.jsp";
		
		
	}
	@RequestMapping("/time")
	public String Time(Model model) {
		Date time = new Date();
		model.addAttribute("time", time);
		return "time.jsp";
	}
	@RequestMapping("/date")
	public String Date(Model model) {
		Date date = new Date();
		model.addAttribute("date", date);
		return "date.jsp";
	}
	

}
