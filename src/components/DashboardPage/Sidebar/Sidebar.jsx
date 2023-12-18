import { useState } from "react";
import "./Sidebar.css";

// import { sidebarData } from "../../../data/dashboard/sidebar";

export default function Dashboard() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  function toggleSidebar() {
    setSidebarIsOpen((prevState) => !prevState);
  }

  return (
    <section className={sidebarIsOpen ? "sidebar" : "sidebar-closed"}>
      <div className="sidebar-container">
        {sidebarIsOpen && (
          <>
            <div className="dashboard-logo">
              <p>e:luvio</p>
            </div>
            <div className="sidebar-selections">
              {sidebarData.map((data) => (
                <div
                  className="sidebar-category"
                  key={data.title}
                >
                  <p className="sidebar-title">{data.title}</p>
                  <ul>
                    {data.selections.map((selection) => (
                      <div
                        className="sidebar-selection-div"
                        key={selection.selection}
                      >
                        <i className={selection.image}></i>
                        <li className="sidebar-selection">{selection.selection}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
        {!sidebarIsOpen && <button onClick={toggleSidebar}>open</button>}
      </div>
    </section>
  );
}
