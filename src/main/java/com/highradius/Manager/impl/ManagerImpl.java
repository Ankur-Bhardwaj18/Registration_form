package com.highradius.Manager.impl;

import com.highradius.DAO.AdminDAO;
import com.highradius.DAO.impl.AdminDAOimpl;
import com.highradius.Manager.Manager;
import com.highradius.models.ExecutionResponse;

public class ManagerImpl implements Manager{
	
	AdminDAOimpl admindaoimpl;


	public AdminDAOimpl getAdmindaoimpl() {
		return admindaoimpl;
	}

	public void setAdmindaoimpl(AdminDAOimpl admindaoimpl) {
		this.admindaoimpl = admindaoimpl;
	}


	public ExecutionResponse add(String username, String email, String password) {
		return admindaoimpl.add(username,email,password);				
	}
	
	
}
