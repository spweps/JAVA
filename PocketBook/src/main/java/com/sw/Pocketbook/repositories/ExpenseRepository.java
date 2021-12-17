package com.sw.Pocketbook.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sw.Pocketbook.models.Expenses;

@Repository
public interface ExpenseRepository extends CrudRepository<Expenses, Long> {
	List<Expenses> findAll();
	List<Expenses> findByDescriptionContaining(String search);


}
