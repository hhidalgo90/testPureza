package com.testPureza.model;

import java.io.Serializable;
import java.util.Arrays;

public class PreguntaTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
	private String glosa;
	private String[] opciones;
	private String respuesta;
	public long getId() {
		return id;
	}
	public String getGlosa() {
		return glosa;
	}
	public void setId(long id) {
		this.id = id;
	}
	public void setGlosa(String glosa) {
		this.glosa = glosa;
	}
	public String[] getOpciones() {
		return opciones;
	}
	public void setOpciones(String[] opciones) {
		this.opciones = opciones;
	}
	public String getRespuesta() {
		return respuesta;
	}
	public void setRespuesta(String respuesta) {
		this.respuesta = respuesta;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("PreguntaTO [id=");
		builder.append(id);
		builder.append(", glosa=");
		builder.append(glosa);
		builder.append(", opciones=");
		builder.append(Arrays.toString(opciones));
		builder.append(", respuesta=");
		builder.append(respuesta);
		builder.append("]");
		return builder.toString();
	}

	
	
}
