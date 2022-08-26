package com.pickpal.server.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pickpal.server.model.Profile;
import com.pickpal.server.repository.ProfileRepository;

@RestController
@RequestMapping("/profile")
public class ProfileController {

  @Autowired
  private ProfileRepository profileRepository;

  @Autowired
  private ModelMapper modelMapper;

  @GetMapping
  @CrossOrigin(origins = "http://localhost:4200")
  public List<Profile> getAll() {
      // return profileRepository.findAll().stream().map(profile -> {
      //   return modelMapper.map(profile, ProfileDTO.class);
      // }).toList();
      return profileRepository.findAll();
  }

}


