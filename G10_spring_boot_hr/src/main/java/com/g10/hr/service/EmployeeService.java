package com.g10.hr.service;
import com.g10.hr.model.Employee;
import com.g10.hr.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired private EmployeeRepository repo;

    public List<Employee> findAll() { return repo.findByActiveTrue(); }
    public Optional<Employee> findById(Long id) { return repo.findById(id); }
    public Employee save(Employee e) { return repo.save(e); }
    public void deactivate(Long id) {
        repo.findById(id).ifPresent(e -> { e.setActive(false); repo.save(e); });
    }
    public List<Employee> search(String name) { return repo.findByNameContainingIgnoreCase(name); }
}
