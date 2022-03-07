package com.highradius.Manager;

import com.highradius.models.ExecutionResponse;

public interface Manager {
	
	public ExecutionResponse add(String username, String email, String password);
	
}
