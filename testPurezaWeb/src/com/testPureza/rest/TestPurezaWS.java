package com.testPureza.rest;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import com.testPureza.business.PurezaBusiness;
import com.testPureza.model.PreguntaTO;

@Path("/testPureza")
public class TestPurezaWS extends TestPureza{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2253110010062029733L;
	@Context
	private HttpServletRequest request;
	
	final static Logger logger = Logger.getLogger(TestPurezaWS.class);

	@GET
    @Path("obtenerPreguntas")
    @Produces(MediaType.APPLICATION_JSON + "; charset=UTF-8")
	public PreguntaTO[] obtenerPreguntas() {
		if(logger.isDebugEnabled()){
		    logger.debug("(obtenerPreguntas) Inicio");
		}
		PurezaBusiness conector = new PurezaBusiness();
		//PreguntaTO[] preguntas = conector.obtenerPreguntas();
		PreguntaTO[] preguntas = new PreguntaTO[2];
		preguntas[0] = new PreguntaTO();
		preguntas[0].setId(0);
		preguntas[0].setGlosa("Por que el fernando es tan wekereke");
		String[] opciones = new String[2];
		opciones[0] = "A";
		opciones[1] = "B";
		preguntas[0].setOpciones(opciones);
		
		preguntas[1] = new PreguntaTO();
		preguntas[1].setId(1);
		preguntas[1].setGlosa("Por que el fernando es tan caballo");
		opciones[0] = "A";
		opciones[1] = "B";
		preguntas[1].setOpciones(opciones);
		if(logger.isDebugEnabled()){
		    logger.debug("(obtenerPreguntas) Fin");
		}
		return preguntas;
		
	}
}
