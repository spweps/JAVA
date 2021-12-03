package com.caresoft.clinicapp;
import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	
	private Integer employeeId;
	private String role;
	private ArrayList<String> securityIncidents = new ArrayList<String>();
	
	
	public AdminUser(int id, String role) {
		super(id);
		this.employeeId= id;
		this.role = role;	
	}
    
    public Integer getEmployeeId() {
    	return employeeId;
    }
    public String getRole() {
    	return role;
    }
    
	
    
    
    public void setEmployeeId(int id) {
    	this.id = id;
    }
    
    public void setRole(String role) {
    	this.role = role;
    }

	public boolean assignPIN(int pin) {
		if (Integer.toString(pin).length() < 6) {
			return false;
		}
		else {
			this.pin = pin;
			return true;
		}
	}
	
	public boolean accessAuthorized(Integer id) {
		if (this.id != id) {
			authIncident();
			return false;
		}
		else {
			return true;
		}
		
	}
	 public void newIncident(String notes) {
	        String report = String.format(
	            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
	            new Date(), this.id, notes
	        );
	        securityIncidents.add(report);
	    }
	    public void authIncident() {
	        String report = String.format(
	            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
	            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
	        );
	        securityIncidents.add(report);
	    }

		@Override
		public ArrayList<String> reportSecurityIncidents() {
			
			return this.securityIncidents;
		}

		@Override
		public boolean assignPin(int pin) {
			return this.assignPIN(pin);
				
		}

}
