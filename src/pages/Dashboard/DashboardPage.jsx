import Sidebar from "../../components/DashboardPage/Sidebar/Sidebar";
import DashboardHeader from "../../components/DashboardPage/Header/Header";
import Tasks from "../../components/DashboardPage/Tasks/Tasks";
import Charts from "../../components/DashboardPage/Charts/Charts";
import Apps from "../../components/DashboardPage/Apps/Apps";

import TaskModal from "../../components/DashboardPage/Tasks/TaskModal/TaskModal";

const DashboardPage = () => {
  const { modalOpen } = useContext(ModalContext);

  return (
    <>
      <div className="dashboard">
        <div className="container">
          <Sidebar />
          <div className="dashboard-right-side">
            <DashboardHeader />
            <Tasks />
            <div className="features">
              <Charts />
              <Apps />
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <TaskModal />}
    </>
  );
};

export default DashboardPage;
