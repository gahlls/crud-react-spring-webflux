package com.gahlls.example.reactivespring.service;

import com.gahlls.example.reactivespring.model.User;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface UserService {

	Flux<User> findAll();
	
	Mono<User> findById(String id);
	
	Mono<User> createUser(User user);
	
	Mono<User> updateUser(String id, User user);
	
	Mono<Void> deleteUser(String id);
}
