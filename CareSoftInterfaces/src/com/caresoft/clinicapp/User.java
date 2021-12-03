package com.caresoft.clinicapp;

public class User {
    protected Integer id;
    protected int pin;
    
    
    public User(int id) {
    	this.id = id;
    	
    }
    public int getUserId() {
    	return this.id;
    }
    public void setPin(int pin) {
    	this.pin = pin; 
    }
    
    public int getPin() {
    	return this.pin;
    }
}
