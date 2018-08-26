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
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("PreguntaTO [id=").append(id).append(", glosa=")
				.append(glosa).append(", opciones=")
				.append(Arrays.toString(opciones)).append("]");
		return builder.toString();
	}
	
	
}
