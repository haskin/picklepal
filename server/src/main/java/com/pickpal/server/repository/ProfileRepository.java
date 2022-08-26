package com.pickpal.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pickpal.server.model.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}
