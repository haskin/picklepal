package com.pickpal.server.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class ProfileDTO {
  private Integer id;
  private String photo;
  private String name;
  private int number;
  private String skillLevel;
  private String description;
  private String matchType;
}
