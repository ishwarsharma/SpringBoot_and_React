package com.joblisting.iss;

import com.joblisting.iss.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

//this is how you fetch data without writing any queries. MongoRepository will care CRUD operation
public interface PostRepository extends MongoRepository<Post,String>
{

}
