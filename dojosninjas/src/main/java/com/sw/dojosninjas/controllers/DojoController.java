package com.sw.dojosninjas.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sw.dojosninjas.models.Dojo;
import com.sw.dojosninjas.services.DojoService;

@Controller
public class DojoController {
private final DojoService dojoService;

	public DojoController(DojoService dojoService) {
		this.dojoService = dojoService;
	}
	
	@RequestMapping("/dojos")
	public String displayDojos(@ModelAttribute("dojo") Dojo dojo, Model model) {
		model.addAttribute("dojos", dojoService.allDojos());
		return "/Dojos.jsp";
	}
	@RequestMapping(value="/dojos", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			System.out.println(result.getFieldErrors());
			return "/Dojos.jsp";
		}else {
			dojoService.createDojo(dojo);
			return "redirect:/dojos";}
		}
	@RequestMapping("/dojo/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Dojo dojo = dojoService.findDojo(id);
		model.addAttribute("dojo", dojo);
		return "/DojoEdit.jsp";
	}
	@RequestMapping(value="/dojo/{id}", method=RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "/Dojos.jsp";
		}else {
			dojoService.createDojo(dojo);
			return "redirect:/expenses";
			}
		}
	@RequestMapping(value="/dojo/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id) {
		dojoService.deleteDojo(id);
		return "redirect:/dojos";
		}
		

}
