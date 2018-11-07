package com.testPureza.business;

import com.testPureza.model.PreguntaTO;

public class PurezaBusiness {

	public PreguntaTO[] obtenerPreguntas(){
		PreguntaTO[] preguntas = new PreguntaTO[1];
		
		preguntas[0] = new PreguntaTO();
		preguntas[0].setId(1);
		preguntas[0].setGlosa("");
		String[] opciones = {"","",""};
		preguntas[0].setOpciones(opciones);
		
		return preguntas;
		
	}
}
