import React, {{ useEffect, useState }} from 'react';
import {{ fetchTasks, createTask, deleteTask, updateTask }} from '../services/api';

export default function Dashboard() {{
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({{ title:'', description:'', priority:'medium' }});
  const load = async () => {{ try {{ const r = await fetchTasks(); setTasks(r.data); }} catch {{ setTasks([]); }} }};
  useEffect(() => {{ load(); }}, []);
  const handleCreate = async e => {{ e.preventDefault(); await createTask(form); setForm({{title:'',description:'',priority:'medium'}}); load(); }};
  const byStatus = s => tasks.filter(t => t.status === s);
  return (
    <div>
      <h1 style={{{{margin:'1.5rem 0 1rem'}}}}>My Tasks</h1>
      <div className="card">
        <form onSubmit={{handleCreate}}>
          <input placeholder="Task title" value={{form.title}} onChange={{e=>setForm({{...form,title:e.target.value}})}} required/>
          <input placeholder="Description" value={{form.description}} onChange={{e=>setForm({{...form,description:e.target.value}})}}/>
          <select value={{form.priority}} onChange={{e=>setForm({{...form,priority:e.target.value}})}}>
            <option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option>
          </select>
          <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
      </div>
      <div style={{{{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem'}}}}>
        {{['todo','in-progress','done'].map(s => (
          <div key={{s}}>
            <h3 style={{{{textTransform:'capitalize',marginBottom:'.8rem'}}}}>{{s.replace('-',' ')}}</h3>
            {{byStatus(s).map(t => (
              <div key={{t._id}} className="card" style={{{{borderLeft:`4px solid ${{{{low:'#10b981',medium:'#f59e0b',high:'#ef4444'}}[t.priority]}}`}}}}>
                <strong>{{t.title}}</strong>
                <p style={{{{fontSize:'.85rem',color:'#666'}}}}>{{t.description}}</p>
                <button className="btn btn-danger" onClick={{()=>{{deleteTask(t._id);load();}}}}>Delete</button>
              </div>
            ))}}
          </div>
        ))}}
      </div>
    </div>
  );
}}
