import { useEffect, useState } from "react";
import { DeleteItem, LoadItems, SaveItem } from "./service";

function Mainlist() {
  const [lista, setList] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState("");
  const [impact, setImpact] = useState("");
  const [plan, setPlan] = useState("");
  useEffect(() => refresh(), []);

  function refresh() {
    LoadItems(search, "").then((items: any[]) => {
      setList(items);
    });
  }

  function deleteClick(id: any) {
    DeleteItem(id).then((o) => refresh());
  }

  function add() {
    SaveItem({ todotext: text, impact: impact, tags: tags, plannedlength: plan }).then((o) =>
      refresh()
    );
  }

  return (
    <div>
      <hr />
      Search:
      <input type="text" onChange={(o) => setSearch(o.target.value)} />
      <button onClick={refresh}>Search</button>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Task</th>
            <th>Tags</th>
            <th>Impact</th>
            <th>Plan(min)</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((i) => {
            return (
              <tr key={i.id}>
                <td>{i.todotext}</td>
                <td>{i.tags}</td>
                <td>{i.impact}</td>
                <td>{i.plannedlength}</td>
                <td>
                  <button
                    onClick={() => deleteClick(i.id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      Task:
      <input type="text" onChange={(o) => setText(o.target.value)} />
      Tags
      <input type="text" onChange={(o) => setTags(o.target.value)} />
      Impact
      <input type="text" onChange={(o) => setImpact(o.target.value)} />
      Plan
      <input type="text" onChange={(o) => setPlan(o.target.value)} />
      <button onClick={add} className="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default Mainlist;
