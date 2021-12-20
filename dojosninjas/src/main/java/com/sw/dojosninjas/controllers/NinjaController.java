package com.sw.dojosninjas.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sw.dojosninjas.models.Ninja;
import com.sw.dojosninjas.services.DojoService;
import com.sw.dojosninjas.services.NinjaService;

@Controller
public class NinjaController {
private final NinjaService ninjaService;
private final DojoService dojoService;

	public NinjaController(NinjaService ninjaService, DojoService dojoService) {
		this.ninjaService = ninjaService;
		this.dojoService=dojoService;
	}
	
	@RequestMapping("/ninjas")
	public String displayNinjas(@ModelAttribute("ninja") Ninja ninja, Model model) {
		model.addAttribute("dojos", dojoService.allDojos());
		return "/Ninja.jsp";
	}
	
	@RequestMapping(value="/ninjas", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
		if (result.hasErrors()) {
			System.out.println(result.getFieldErrors());
			return "/Ninja.jsp";
		}else {
			ninjaService.createNinja(ninja);
			return "redirect:/dojos";
		}}
	@RequestMapping("/ninjas/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Ninja ninja = ninjaService.findNinja(id);
		model.addAttribute("ninja", ninja);
			return "/Dojos.jsp";
		}
	@RequestMapping(value="/ninjas/{id}", method=RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("ninja") Ninja Ninja, BindingResult result) {
		if (result.hasErrors()) {
			return "/Dojos.jsp";
		}else {
			ninjaService.createNinja(Ninja);
				return "redirect:/dojos";
			}
		}
	@RequestMapping(value="/ninja/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id) {
		ninjaService.deleteNinja(id);
			return "redirect:/Dojos";
		}


}
