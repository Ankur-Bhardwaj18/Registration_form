package com.highradius.DAO.impl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session; 
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;

import com.highradius.DAO.AdminDAO;
import com.highradius.models.ExecutionResponse;
import com.highradius.models.RegistrationPOJO;

public class AdminDAOimpl implements AdminDAO{
	
	private static SessionFactory factory = getsessionfactory();
	
	private static SessionFactory getsessionfactory() {
		try {
	         factory = new Configuration().configure().buildSessionFactory();
	      } catch (Throwable ex) { 
	         System.out.println("Failed to create sessionFactory object.");
	         throw new ExceptionInInitializerError(ex); 
	      }
		return factory;
	}
	
	public ExecutionResponse add(String username, String email, String password) {
		
		ExecutionResponse res = new ExecutionResponse();

		if(dublicateuser(username)) {
			System.out.println("Duplicate user");
			res.setStatus(false);
			res.setMessage("Username Already Exist <br> Username:"+username);
		}
		else if(dublicateemail(email)) {
			System.out.println("Duplicate Email");
			res.setMessage("Email Already Exist <br> email: "+email);
			res.setStatus(false);
		}
		else {
			Session session = factory.openSession();
			Transaction tx = null;
			try {
				tx = session.beginTransaction();
				RegistrationPOJO reg = new RegistrationPOJO(username,email,password);
				session.save(reg);
				tx.commit();
				res.setStatus(true);
				res.setMessage("Registration Successful");
				System.out.println("Inserted ");
			}
			catch (HibernateException e) {
				if (tx!=null) tx.rollback();
				e.printStackTrace(); 
				res.setStatus(false);
				res.setMessage("Something Went Wrong in the time of insertion");
				System.out.println("Inserted failed");				
			} 
			finally {
				session.close(); 
			}
		}
		return res;
	}
	
	public boolean dublicateuser(String username) {
		Session session = factory.openSession();
		List list=null;
		try { 
			Criteria criteria = session.createCriteria(RegistrationPOJO.class);
			criteria.add(Restrictions.eq("username", username));
			list = criteria.list();
		} 	
		catch (HibernateException e) {
			e.printStackTrace(); 
		} 
		finally {
			session.close();
		}
		System.out.println(list.size());
		if(list.size()>0) {
			System.out.println("true ");
			return true;
		}
		else return false;
	}
	
	public boolean dublicateemail(String email) {
		Session session = factory.openSession();
		List list=null;
		try { 
			Criteria criteria = session.createCriteria(RegistrationPOJO.class);
			criteria.add(Restrictions.eq("email", email));
			list = criteria.list();
		} 	
		catch (HibernateException e) {
			e.printStackTrace(); 
		} 
		finally {
			session.close();
		}
		if(list.size()>0)
			return true;
		else return false;
	}
	

}
