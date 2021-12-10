package com.sw.DaikichiRoutes.controllers;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sw.OmikujiForm.models.OmikujiModel;
@RequestMapping("/omikuji")
@RestController
public class OmikujiController {

		
@RequestMapping("/")
public String index(){
	return "Omikugi.jsp";
}
@RequestMapping("/show")
public String show(@RequestParam(value="number") Integer number,
	@RequestParam(value="city") String city, @RequestParam(value="person") String person,
			@RequestParam(value="activity") String activity, @RequestParam(value="anything") String anything, @RequestParam(value="controversial") String controversial){
		    	OmikujiModel model = new OmikujiModel();
		    	model.city= city;
		    	model.person=person;
		    	model.activity=activity;
		    	model.anything=anything;
		    	model.controversial = controversial;
		      return "OmikugiShow.jsp";
		    }
		    
}


	

