package com.sw.DaikichiRoutes.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class Controller {
	
	    @RequestMapping("")
	    public String index(){
	      return "Welcome to hell...muahahahaha";
	    }
	    @RequestMapping("/today")
	    public String hello(){
	      return "You will find despair in all you do";
	    }
	    @RequestMapping("/tomorrow")
	    public String world(){
	      return "Tomorrow an opportunity will pass you will be powerless to stop it";
	    }
	    @RequestMapping("/travel/busan")
	    public String travel() {
	    	return "Beware. Zombies have taken Busan. Travel at your own risk";
	    }
	    @RequestMapping("/lotto/{num}")
	    public String lotto(@PathVariable("num") Integer num){
	      if (num % 2 == 0) {
	    	  return "Death is imminent.";
	      }
	      else {
	    	  return "I'm surprised you're not dead already.";
	      }
	    
	}


}
