package com.gahlls.example.reactivespring.model.enums;
import static java.util.Objects.nonNull;

public enum Genre {

	MASCULINO(1, "Masculino"), 
	FEMININO(2, "Feminino"), 
	OUTRO(3, "Outro"), 
	NENHUM(4, "Nenhum");
	
	private int id;
	private String descricao;
	
	private Genre(int id, String descricao) {
		this.id = id;
		this.descricao = descricao;
	}
	
	public int getId() {
		return id;
	}

	public String getDescricao() {
		return descricao;
	}
	
	public static Genre toEnum(Integer id) {
		
		if(nonNull(id)) {
			
			for(Genre x : Genre.values()) {
				if(id.equals(x.getId())) {
					return x;
				}
			}
		}
		
		throw new IllegalArgumentException("Id inválido" + id);
	}
}
