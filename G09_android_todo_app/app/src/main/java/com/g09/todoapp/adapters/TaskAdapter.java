package com.g09.todoapp.adapters;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.DiffUtil;
import androidx.recyclerview.widget.ListAdapter;
import androidx.recyclerview.widget.RecyclerView;
import com.g09.todoapp.R;
import com.g09.todoapp.models.Task;

public class TaskAdapter extends ListAdapter<Task, TaskAdapter.TaskViewHolder> {

    public TaskAdapter() {
        super(new DiffUtil.ItemCallback<Task>() {
            @Override public boolean areItemsTheSame(@NonNull Task a, @NonNull Task b) { return a.id == b.id; }
            @Override public boolean areContentsTheSame(@NonNull Task a, @NonNull Task b) { return a.title.equals(b.title) && a.isDone == b.isDone; }
        });
    }

    @NonNull @Override
    public TaskViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_task, parent, false);
        return new TaskViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull TaskViewHolder holder, int position) {
        Task t = getItem(position);
        holder.title.setText(t.title);
        holder.description.setText(t.description != null ? t.description : "");
        holder.location.setText(t.locationName != null ? "📍 " + t.locationName : "");
    }

    static class TaskViewHolder extends RecyclerView.ViewHolder {
        TextView title, description, location;
        TaskViewHolder(@NonNull View v) {
            super(v);
            title       = v.findViewById(R.id.tv_title);
            description = v.findViewById(R.id.tv_description);
            location    = v.findViewById(R.id.tv_location);
        }
    }
}
