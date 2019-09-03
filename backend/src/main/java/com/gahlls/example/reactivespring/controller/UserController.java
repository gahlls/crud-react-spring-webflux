package com.gahlls.example.reactivespring.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gahlls.example.reactivespring.model.User;
import com.gahlls.example.reactivespring.request.AddUser;
import com.gahlls.example.reactivespring.service.UserService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService service;
	
    @Autowired
    private ModelMapper modelMapper;
	
	@GetMapping
	public Flux<User> getAll() {
		return service.findAll();
	}
	
	@GetMapping("/{id}")
	public Mono<User> getById(@PathVariable String id) {
		return service.findById(id);
	}
	
	@PostMapping
	public Mono<User> createUser(@RequestBody AddUser addUser) {
		User user = modelMapper.map(addUser, User.class);
		return service.createUser(user);
	}
	
	@PutMapping("/{id}")
	public Mono<User> updateUser(@PathVariable String id, @RequestBody User user) {
		return service.updateUser(id, user);
	}
	
	@DeleteMapping("/{id}")
	public Mono<Void> deleteUser(@PathVariable String id) {
		return service.deleteUser(id);
	}
}
