package com.sw.Pocketbook.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sw.Pocketbook.models.Expenses;
import com.sw.Pocketbook.services.ExpenseService;

@Controller
public class ExpenseTracker {
private final ExpenseService expenseService;
	
	public ExpenseTracker(ExpenseService expenseService) {
		this.expenseService = expenseService;
	}
	
	@RequestMapping("/expenses")
	public String displayExpenses(@ModelAttribute("expense") Expenses expense, Model model) {
		model.addAttribute("expenses", expenseService.allExpenses());
	return "/expenses.jsp";
	}
	@RequestMapping(value="/expenses", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("expense") Expenses expense, BindingResult result) {
		if (result.hasErrors()) {
			System.out.println(result.getFieldErrors());
			return "/expenses.jsp";
		}else {
			expenseService.createExpense(expense);
			return "redirect:/expenses";
		}
	}
	@RequestMapping("/expenses/show")
	public String showExpense(@ModelAttribute("expense") Expenses expense) {
		return "/ShowExpenses.jsp";
	}
	@RequestMapping("/expenses/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Expenses expense = expenseService.findExpense(id);
		model.addAttribute("expense", expense);
		return "/EditExpenses.jsp";
	}
	@RequestMapping(value="/expenses/{id}", method=RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("expense") Expenses expense, BindingResult result) {
		if (result.hasErrors()) {
			return "/EditExpenses.jsp";
		}else {
			expenseService.createExpense(expense);
			return "redirect:/expenses";
		}
	}
	@RequestMapping(value="/expenses/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id) {
		expenseService.deleteExpense(id);
		return "redirect:/expenses";
	}
	
	

}
