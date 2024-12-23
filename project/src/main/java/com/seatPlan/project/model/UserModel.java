//Kenneth Christian B. Gutierrez
package com.seatPlan.project.model;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {

    private String user_id;

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

    private String created_by;

    private LocalDateTime updated_time;

    private String updated_by;

    // For joint table
    private String position_name;
    private String usertype_name;
    private String staffstatus_name;
    private String project_name;
}
