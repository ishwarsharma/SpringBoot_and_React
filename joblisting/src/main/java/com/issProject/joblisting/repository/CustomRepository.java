package com.issProject.joblisting.repository;

import java.util.List;

import com.issProject.joblisting.model.Post;

public interface CustomRepository
{
    List<Post> findByText(String text);//to implement this we need class
    
}
