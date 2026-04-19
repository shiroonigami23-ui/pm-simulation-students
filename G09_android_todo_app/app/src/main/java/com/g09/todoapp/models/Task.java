package com.g09.todoapp.models;

import androidx.room.Entity;
import androidx.room.PrimaryKey;
import androidx.room.ColumnInfo;
import java.util.Date;

@Entity(tableName = "tasks")
public class Task {
    @PrimaryKey(autoGenerate = true)
    public int id;

    @ColumnInfo(name = "title")
    public String title;

    @ColumnInfo(name = "description")
    public String description;

    @ColumnInfo(name = "priority")
    public int priority; // 1=Low, 2=Medium, 3=High

    @ColumnInfo(name = "is_done")
    public boolean isDone;

    @ColumnInfo(name = "due_date")
    public long dueDate; // epoch millis

    // Location fields for Google Maps integration
    @ColumnInfo(name = "location_lat")
    public double locationLat;

    @ColumnInfo(name = "location_lng")
    public double locationLng;

    @ColumnInfo(name = "location_name")
    public String locationName;

    @ColumnInfo(name = "created_at")
    public long createdAt;

    public Task() { this.createdAt = System.currentTimeMillis(); }
}
