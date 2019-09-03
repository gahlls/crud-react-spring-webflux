package com.gahlls.example.reactivespring.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.gahlls.example.reactivespring.model.User;

public interface UserReactiveRepository extends ReactiveMongoRepository<User, String> {

}
