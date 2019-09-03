package com.gahlls.example.reactivespring.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.gahlls.example.reactivespring.model.enums.Genre;

public class AddUser {

	private String name;
	private String lastName;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dateBorn;
	private Genre genre;
	private String email;
	private String password;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public LocalDate getDateBorn() {
		return dateBorn;
	}

	public void setDateBorn(LocalDate dateBorn) {
		this.dateBorn = dateBorn;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
