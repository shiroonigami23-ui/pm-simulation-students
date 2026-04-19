package com.g10.hr.controller;
import com.g10.hr.model.Employee;
import com.g10.hr.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller @RequestMapping("/employees")
public class EmployeeController {
    @Autowired private EmployeeService service;

    @GetMapping
    public String list(Model m, @RequestParam(required=false) String search) {
        m.addAttribute("employees", search != null && !search.isBlank()
            ? service.search(search) : service.findAll());
        m.addAttribute("search", search);
        return "employees/list";
    }

    @GetMapping("/new")
    public String newForm(Model m) { m.addAttribute("employee", new Employee()); return "employees/form"; }

    @PostMapping
    public String create(@Valid @ModelAttribute Employee e, BindingResult b, Model m) {
        if (b.hasErrors()) return "employees/form";
        service.save(e); return "redirect:/employees";
    }

    @GetMapping("/{id}/edit")
    public String editForm(@PathVariable Long id, Model m) {
        service.findById(id).ifPresent(e -> m.addAttribute("employee", e));
        return "employees/form";
    }

    @PostMapping("/{id}")
    public String update(@PathVariable Long id, @Valid @ModelAttribute Employee e, BindingResult b) {
        if (b.hasErrors()) return "employees/form";
        e.setId(id); service.save(e); return "redirect:/employees";
    }

    @PostMapping("/{id}/deactivate")
    public String deactivate(@PathVariable Long id) { service.deactivate(id); return "redirect:/employees"; }
}
