package com.testPureza.model;

public class PreguntaTO {

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
	
	
}
