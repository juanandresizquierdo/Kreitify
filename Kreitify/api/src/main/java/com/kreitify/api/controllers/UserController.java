package com.kreitify.api.controllers;

import com.kreitify.api.models.AppUser;
import com.kreitify.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public AppUser createUser(@RequestBody AppUser user) {
        return userService.createUser(user);
    }

    @GetMapping
    public List<AppUser> getAllUsers(){
        return userService.getAllUsers();
    }

    @PutMapping("/{userId}")
    public ResponseEntity<AppUser> updateUser(@PathVariable Long userId, @RequestBody AppUser updatedUser) {
        AppUser user = userService.updateUser(userId, updatedUser);
        return ResponseEntity.ok().body(user);
    }

    @GetMapping("{id}")
    public Optional<AppUser> getUserById(@PathVariable("id") Long id){
        return userService.getUserById(id);
    }

    @DeleteMapping("{id}")
    public void deleteUserById(@PathVariable("id") Long id){
        userService.deleteUser(id);
    }


    @GetMapping("/username/{username}")
    public ResponseEntity<AppUser> getUserByUsername(@PathVariable("username") String username) {
        Optional<AppUser> user = userService.getUserByUsername(username);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
