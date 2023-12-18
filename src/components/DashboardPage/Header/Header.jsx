import "./Header.css";

export default function DashboardHeader() {
  return (
    <section className="dashboard-header">
      <div className="db-header-container">
        <div className="db-header-searchdiv">
          <input type="text"></input>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="db-header-calender">
          <p>Monday, 6th March</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className="db-welcome-div">
          <h1>Welcome</h1>

          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </section>
  );
}
