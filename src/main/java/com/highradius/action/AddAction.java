package com.highradius.action;

import com.highradius.Manager.Manager;
import com.highradius.Manager.impl.ManagerImpl;
import com.highradius.models.ExecutionResponse;
import com.opensymphony.xwork2.ActionSupport;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AddAction extends ActionSupport{
	
	private String username;
	private String email;
	private String password;
	
	private boolean status;
	private String message;
	
//	ManagerImpl obj = new ManagerImpl();
	
	ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
	ManagerImpl obj = (ManagerImpl) context.getBean("managar");

	public String add() {
		ExecutionResponse res = obj.add(username,email,password);
		setStatus(res.isStatus());
		setMessage(res.getMessage());
		return SUCCESS;
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

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}	
	
}
