package com.g10.hr.repository;
import com.g10.hr.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByDepartment(String department);
    List<Employee> findByActiveTrue();
    List<Employee> findByNameContainingIgnoreCase(String name);
}
