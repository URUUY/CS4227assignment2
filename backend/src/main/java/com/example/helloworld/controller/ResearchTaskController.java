package com.example.helloworld.controller;

import com.example.helloworld.model.ResearchTask;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/research-tasks")
public class ResearchTaskController {

    private Map<String, ResearchTask> tasks = new HashMap<>();

    @PostMapping
    public String addResearchTask(@RequestBody ResearchTask task) {
        // 生成唯一 ID
        String id = UUID.randomUUID().toString();
        task.setId(id);
        task.setStatus("PENDING");
        tasks.put(id, task);

        System.out.println("RM：");
        System.out.println("ID: " + task.getId());
        System.out.println("NAME: " + task.getName());
        System.out.println("STATUS: " + task.getStatus());

        return "RM SUBMIT SUCCESS！";
    }

    @GetMapping
    public Map<String, ResearchTask> getResearchTasks() {
        return tasks;
    }

    @PutMapping("/{id}/approve")
    public String approveResearchTask(@PathVariable String id) {
        ResearchTask task = tasks.get(id);
        if (task != null) {
            task.setStatus("APPROVED");
            return "TASK APPROVED！";
        } else {
            return "TASK NO EXIST！";
        }
    }

    @PutMapping("/{id}/reject")
    public String rejectResearchTask(@PathVariable String id) {
        ResearchTask task = tasks.get(id);
        if (task != null) {
            task.setStatus("REJECTED");
            return "REJECT！";
        } else {
            return "NO EXIST";
        }
    }
}