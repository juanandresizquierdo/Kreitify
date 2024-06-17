package com.kreitify.api.service;

import com.kreitify.api.models.AppUser;
import com.kreitify.api.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public AppUser createUser(AppUser user) {
        return userRepository.save(user);
    }

    public Optional<AppUser> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public List<AppUser> getAllUsers(){
        return userRepository.findAll();
    }

    public AppUser updateUser(Long userId, AppUser updatedUser) {
        // Buscar el usuario existente por su ID
        Optional<AppUser> optionalUser = userRepository.findById(userId);

        if (optionalUser.isPresent()) {
            // Obtener el usuario existente
            AppUser existingUser = optionalUser.get();

            // Actualizar los campos del usuario existente con los valores del usuario actualizado
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setFirstName(updatedUser.getFirstName());
            existingUser.setLastName(updatedUser.getLastName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setRole(updatedUser.getRole());

            // Guardar el usuario actualizado en la base de datos
            return userRepository.save(existingUser);
        } else {
            // Manejar el caso en que el usuario no se encuentra en la base de datos
            throw new EntityNotFoundException("User not found with id: " + userId);
        }
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    public Optional<AppUser> getUserByUsername(String username) {
        Optional<AppUser> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isPresent()) {
            return optionalUser;
        } else {
            throw new EntityNotFoundException("User not found with username: " + username);
        }
    }
}

