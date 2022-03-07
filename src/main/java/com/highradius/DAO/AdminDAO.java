package com.highradius.DAO;

import com.highradius.models.ExecutionResponse;

public interface AdminDAO {
	
	public ExecutionResponse add(String username, String email, String password);
	
}
