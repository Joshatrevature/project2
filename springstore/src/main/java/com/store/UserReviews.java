package com.store;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "user_reviews")
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserReviews {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reviewID;

    private String userName;
    @Column(name= "game_review", columnDefinition = "varchar(1337)" )
    
    private String review;

}
