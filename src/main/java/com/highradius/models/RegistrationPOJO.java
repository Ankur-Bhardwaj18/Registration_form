package com.highradius.models;

public class RegistrationPOJO {

	private int registrationId;
	private String username;
	private String email;
	private String password;
	
	
	public RegistrationPOJO() {
	}

	public RegistrationPOJO(int registrationId, String username, String email, String password) {
		this.registrationId = registrationId;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public RegistrationPOJO(String username, String email, String password) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
	}


	public int getRegistrationId() {
		return registrationId;
	}


	public void setRegistrationId(int registrationId) {
		this.registrationId = registrationId;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	
}