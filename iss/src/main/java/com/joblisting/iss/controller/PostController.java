package com.joblisting.iss.controller;

import com.joblisting.iss.PostRepository;
import com.joblisting.iss.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
public class PostController 
{
   @Autowired
   PostRepository repo;
   @ApiIgnore //this will remove all GET,HEAD,POST,PUT,DELETE,OPTION pre defined reques and show "No operations defined in spec!"
   @RequestMapping(value = "/")
   public void redirect(HttpServletResponse response) throws IOException
   {
    response.sendRedirect("/swagger-ui.html");
   }

   @GetMapping("/allPosts")
   public List<Post> getAllPosts()
   {
      return repo.findAll();
   }
   @PostMapping("/post")
   public Post addPost(@RequestBody Post post)
   {
      return repo.save(post);
   }
}
