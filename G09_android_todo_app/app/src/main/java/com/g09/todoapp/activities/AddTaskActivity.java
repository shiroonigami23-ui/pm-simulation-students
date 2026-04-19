package com.g09.todoapp.activities;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.g09.todoapp.database.AppDatabase;
import com.g09.todoapp.models.Task;
import java.util.concurrent.Executors;

public class AddTaskActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_task);

        EditText etTitle = findViewById(R.id.et_title);
        EditText etDesc  = findViewById(R.id.et_description);
        Button   btnSave = findViewById(R.id.btn_save);

        btnSave.setOnClickListener(v -> {
            String title = etTitle.getText().toString().trim();
            if (title.isEmpty()) { Toast.makeText(this,"Title required",Toast.LENGTH_SHORT).show(); return; }

            Task task = new Task();
            task.title = title;
            task.description = etDesc.getText().toString().trim();
            task.priority = 2; // Default medium

            Executors.newSingleThreadExecutor().execute(() -> {
                AppDatabase.getInstance(this).taskDao().insert(task);
                runOnUiThread(() -> { Toast.makeText(this,"Task added",Toast.LENGTH_SHORT).show(); finish(); });
            });
        });
    }
}
