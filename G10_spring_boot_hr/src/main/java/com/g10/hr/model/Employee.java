package com.g10.hr.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import java.time.LocalDate;

@Entity @Table(name="employees")
@Data @NoArgsConstructor @AllArgsConstructor
public class Employee {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotBlank @Size(max=120)
    private String name;

    @NotBlank @Email @Column(unique=true)
    private String email;

    @NotBlank @Size(max=100)
    private String department;

    @NotBlank @Size(max=100)
    private String jobTitle;

    @NotNull
    private LocalDate joiningDate;

    @Min(0) @Max(10000000)
    private Double salary;

    private String phone;
    private String address;
    private boolean active = true;
}
