package com.seatPlan.project.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class UserOutputDto {

    private Long user_id;

    private List<Long> project_id;

    private String first_name;

    private String last_name;

    private String email;

    private Long mobile_num;

    private String username;

    private String password;

    private String oldPassword;

    private Long staffstatus_id;

    private Long usertype_id;

    private Long position_id;

    private String user_picture;

    private int is_deleted;

    private LocalDateTime created_time;

    private Long created_by;

    private LocalDateTime updated_time;

    private Long updated_by;

    // For joint table
    private String position_name;
    private String usertype_name;
    private String staffstatus_name;
    private String project_name;

}
