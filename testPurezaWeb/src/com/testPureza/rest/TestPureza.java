package com.testPureza.rest;

import java.io.Serializable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.Context;

public class TestPureza  implements Serializable{
	  private static final long serialVersionUID = 3003553061631856141L;
	  @Context
	  private HttpServletRequest servletRequest;
	  @Context
	  private HttpServletResponse servletResponse;
	}

