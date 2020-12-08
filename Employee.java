package com.demo.bean;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Employee extends Person {
	static SimpleDateFormat sdf=new SimpleDateFormat("dd-mm-yy");
	private String dept;
	private String desg;
	private Date doJ;
	
	public Employee() {
		super();
		this.dept="";
		this.desg="";
		this.doJ=null;
	}
	
	public Employee(int id, String nm, String mobile, Date bdate, String email,String dept,String desg,Date doj) {
		super(id, nm, mobile, bdate, email);
		System.out.println("In parametrised Employee");
		this.dept=dept;
		this.desg=desg;
		this.doJ=doj;
		
	}
	
	
	public Date getDoj() {
		return doJ;
	}

	public void setDOj(Date doj) {
		this.doJ = doj;
	}
	

	

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public String getDesg() {
		return desg;
	}

	public void setDesg(String desg) {
		this.desg = desg;
	}

	public Date getDoJ() {
		return doJ;
	}

	public void setDoJ(Date doJ) {
		this.doJ = doJ;
	}

	
	public double CalSal()
	{
		return 0.0;
	}
	
	
	@Override
	public String toString() {
		return super.toString()+"\ndept "+this.dept+" \ndesg="+this.desg+" \ndoj="+sdf.format(this.doJ)+"";
	}
	
	
	
	
	

}
