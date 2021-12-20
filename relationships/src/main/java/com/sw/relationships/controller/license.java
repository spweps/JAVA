package com.sw.relationships.controller;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.sw.relationships.models.License;

public class license {
	@PostMapping("/licenses")
	public String licenses(@Valid @ModelAttribute("license") License license) {
	    // error handling with binding result omitted    
	    licenseService.create(license); // Already has the person!
	        
	    return "redirect:/persons";
	}


}
