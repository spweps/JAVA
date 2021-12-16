package com.sw.Pocketbook.controllers;


@Controller
public class ExpenseTracker {
	
	@RequestMapping("/expenses/new")
	public String newExpense(@ModelAttribute("expense") Expense expense) {
		return "/expenses
	}

}
