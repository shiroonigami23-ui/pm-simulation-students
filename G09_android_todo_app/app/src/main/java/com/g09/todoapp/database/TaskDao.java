package com.g09.todoapp.database;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;
import com.g09.todoapp.models.Task;
import java.util.List;

@Dao
public interface TaskDao {
    @Insert
    void insert(Task task);

    @Update
    void update(Task task);

    @Delete
    void delete(Task task);

    @Query("SELECT * FROM tasks ORDER BY priority DESC, due_date ASC")
    LiveData<List<Task>> getAllTasks();

    @Query("SELECT * FROM tasks WHERE is_done = 0 ORDER BY priority DESC")
    LiveData<List<Task>> getActiveTasks();

    @Query("SELECT * FROM tasks WHERE is_done = 1")
    LiveData<List<Task>> getDoneTasks();

    @Query("UPDATE tasks SET is_done = 1 WHERE id = :id")
    void markDone(int id);
}
