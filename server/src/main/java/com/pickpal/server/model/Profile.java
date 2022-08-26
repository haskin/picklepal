/*
 *export interface Profile {
  id: number;
  photo: string;
  name: string;
  age: number;
  skillLevel: SkillLevel;
  description: string;
  matchType?: MatchType;
 */

package com.pickpal.server.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Profile {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String photo;
  private String name;
  private int number;
  @Enumerated(EnumType.STRING)
  private SkillLevel skillLevel;
  private String description;
  @Enumerated(EnumType.STRING)
  private MatchType matchType;

}
