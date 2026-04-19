package com.g09.todoapp.activities;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.Observer;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.g09.todoapp.R;
import com.g09.todoapp.adapters.TaskAdapter;
import com.g09.todoapp.database.AppDatabase;
import com.g09.todoapp.models.Task;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private TaskAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RecyclerView rv = findViewById(R.id.taskRecyclerView);
        adapter = new TaskAdapter();
        rv.setLayoutManager(new LinearLayoutManager(this));
        rv.setAdapter(adapter);

        AppDatabase.getInstance(this).taskDao().getActiveTasks()
            .observe(this, tasks -> adapter.submitList(tasks));

        FloatingActionButton fab = findViewById(R.id.fab_add);
        fab.setOnClickListener(v -> startActivity(new Intent(this, AddTaskActivity.class)));
    }
}
