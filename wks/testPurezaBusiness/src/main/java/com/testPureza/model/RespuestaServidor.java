package com.testPureza.model;

import java.io.Serializable;

public class RespuestaServidor implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String respuesta;

	public String getRespuesta() {
		return respuesta;
	}

	public void setRespuesta(String respuesta) {
		this.respuesta = respuesta;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("RespuestaServidor [respuesta=").append(respuesta)
				.append("]");
		return builder.toString();
	}
	
	
}
