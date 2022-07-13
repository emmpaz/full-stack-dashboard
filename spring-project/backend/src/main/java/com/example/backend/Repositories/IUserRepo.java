package com.example.backend.Repositories;
import com.example.backend.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepo extends JpaRepository<User, Long> {
}
