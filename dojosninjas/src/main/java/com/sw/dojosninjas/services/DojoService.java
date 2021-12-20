package com.sw.dojosninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.sw.dojosninjas.models.Dojo;
import com.sw.dojosninjas.repositories.DojoRepository;

@Service
public class DojoService {

private final DojoRepository dojoRepository;
public DojoService(DojoRepository dojoRepository) {
	this.dojoRepository=dojoRepository;
}
	public List<Dojo>allDojos(){
		return dojoRepository.findAll();
	}
	public Dojo createDojo(Dojo dojo) {
		return dojoRepository.save(dojo);
	}
	public Dojo findDojo(Long id) {
		Optional<Dojo> optionalDojo=dojoRepository.findById(id);
		if (optionalDojo.isPresent()) {
			return optionalDojo.get();
		}else {
			return null;
		}
	}
	public void deleteDojo(Long id) {
		dojoRepository.deleteById(id);
	}

}
