package com.issProject.joblisting.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.issProject.joblisting.model.Post;

public interface PostRepository extends MongoRepository<Post,String>
{
    
}
