package com.gahlls.example.reactivespring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gahlls.example.reactivespring.model.User;
import com.gahlls.example.reactivespring.repository.UserReactiveRepository;
import com.gahlls.example.reactivespring.service.UserService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserReactiveRepository repository;

	@Override
	public Flux<User> findAll() {
		return repository.findAll();
	}

	@Override
	public Mono<User> findById(String id) {
		return repository.findById(id);
	}

	@Override
	public Mono<User> createUser(User user) {
		return repository.save(user);
	}
	
	@Override
	public Mono<User> updateUser(String id, User user) {
		return this.findById(id).flatMap(userCurrent -> {
			userCurrent.setName(user.getName());
			userCurrent.setLastName(user.getLastName());
			userCurrent.setEmail(user.getEmail());
			userCurrent.setPassword(user.getPassword());
			userCurrent.setDateBorn(user.getDateBorn());
			userCurrent.setGenre(user.getGenre());
			return repository.save(userCurrent);
		});
	}

	@Override
	public Mono<Void> deleteUser(String id) {
		return repository.deleteById(id);
	}
}
