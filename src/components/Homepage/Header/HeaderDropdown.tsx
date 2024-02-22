import "./dropdown.css";

type DropdownProps = {
  dropdownActive: boolean;
};

const HeaderDropdown = ({ dropdownActive }: DropdownProps) => {
  return (
    <div className={dropdownActive ? "dropdown active" : "dropdown"}>
      <div className="dropdown-left">
        <h3>Our feature products</h3>
        <ul>
          <li>Enterprise plans</li>
          <li>1-on-1 coaching</li>
          <li>Campaign optimization</li>
        </ul>
        <a>
          Product overview
          <img src="data:image/svg+xml;base64,IDxzdmcgd2lkdGg9IjkiIGhlaWdodD0iNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDkgNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJMYXllcl8xIiBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTY4XzIwNDIpIj4KICAgIDxwYXRoCiAgICAgICAgaWQ9IlZlY3RvciIKICAgICAgICBkPSJNOC44MiAyLjU2MDAzTDYuNDcgMC4yMTAwMjlDNi4yMyAtMC4wMjk5NzA3IDUuODQgLTAuMDI5OTcwNyA1LjU5IDAuMjEwMDI5QzUuNDcgMC4zMzAwMjkgNS40MSAwLjQ4MDAyOSA1LjQxIDAuNjUwMDI5QzUuNDEgMC44MjAwMjkgNS40NyAwLjk3MDAyOSA1LjU5IDEuMDkwMDNMNi44OCAyLjM4MDAzSDEuMTJDMC43OCAyLjM4MDAzIDAuNSAyLjY2MDAzIDAuNSAzLjAwMDAzQzAuNSAzLjM0MDAzIDAuNzggMy42MjAwMyAxLjEyIDMuNjIwMDNINi44OUw1LjYgNC45MTAwM0M1LjQ4IDUuMDMwMDMgNS40MiA1LjE4MDAzIDUuNDIgNS4zNTAwM0M1LjQyIDUuNTIwMDMgNS40OCA1LjY3MDAzIDUuNiA1Ljc5MDAzQzUuNzIgNS45MTAwMyA1Ljg4IDUuOTcwMDMgNi4wNCA1Ljk3MDAzQzYuMiA1Ljk3MDAzIDYuMzYgNS45MTAwMyA2LjQ4IDUuNzkwMDNMOC44MyAzLjQ0MDAzQzkuMDcgMy4yMDAwMyA5LjA3IDIuODEwMDMgOC44MyAyLjU2MDAzSDguODJaIgogICAgICAgIGZpbGw9IiMyMjIyMjIiCiAgICAvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzk2OF8yMDQyIj4KICAgICAgICA8cmVjdAogICAgICAgIHdpZHRoPSI4LjUiCiAgICAgICAgaGVpZ2h0PSI1Ljk0IgogICAgICAgIGZpbGw9IndoaXRlIgogICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSAwLjAzMDAyOTMpIgogICAgICAgIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4=" />
        </a>
      </div>
      <div className="dropdown-right">
        <h3>Feature highlights</h3>
        <ul>
          <div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1692231088-sales.svg" />
              <li>Sales & Marketing</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1692281553-payments.svg" />
              <li>Payments</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1693405120-analytics.svg" />
              <li>Analytics & Reporting</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1692231086-creator-support-services.svg" />
              <li>Support Services</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1695243381-page-builder.svg" />
              <li>Site Builder</li>
            </div>
          </div>
          <div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1689903405-memberships.svg" />
              <li>Memberships</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1692231084-ai-hub.svg" />
              <li>AI Features</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1689903406-integrations.svg" />
              <li>App Hub</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1694616705-student-engagement.svg" />
              <li>User Accounts</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://www.datocms-assets.com/67254/1693405126-advanced-features.svg" />
              <li>Advanced Features</li>
            </div>
          </div>
        </ul>
        <a>
          Feature overview{" "}
          <img src="data:image/svg+xml;base64,IDxzdmcgd2lkdGg9IjkiIGhlaWdodD0iNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDkgNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJMYXllcl8xIiBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTY4XzIwNDIpIj4KICAgIDxwYXRoCiAgICAgICAgaWQ9IlZlY3RvciIKICAgICAgICBkPSJNOC44MiAyLjU2MDAzTDYuNDcgMC4yMTAwMjlDNi4yMyAtMC4wMjk5NzA3IDUuODQgLTAuMDI5OTcwNyA1LjU5IDAuMjEwMDI5QzUuNDcgMC4zMzAwMjkgNS40MSAwLjQ4MDAyOSA1LjQxIDAuNjUwMDI5QzUuNDEgMC44MjAwMjkgNS40NyAwLjk3MDAyOSA1LjU5IDEuMDkwMDNMNi44OCAyLjM4MDAzSDEuMTJDMC43OCAyLjM4MDAzIDAuNSAyLjY2MDAzIDAuNSAzLjAwMDAzQzAuNSAzLjM0MDAzIDAuNzggMy42MjAwMyAxLjEyIDMuNjIwMDNINi44OUw1LjYgNC45MTAwM0M1LjQ4IDUuMDMwMDMgNS40MiA1LjE4MDAzIDUuNDIgNS4zNTAwM0M1LjQyIDUuNTIwMDMgNS40OCA1LjY3MDAzIDUuNiA1Ljc5MDAzQzUuNzIgNS45MTAwMyA1Ljg4IDUuOTcwMDMgNi4wNCA1Ljk3MDAzQzYuMiA1Ljk3MDAzIDYuMzYgNS45MTAwMyA2LjQ4IDUuNzkwMDNMOC44MyAzLjQ0MDAzQzkuMDcgMy4yMDAwMyA5LjA3IDIuODEwMDMgOC44MyAyLjU2MDAzSDguODJaIgogICAgICAgIGZpbGw9IiMyMjIyMjIiCiAgICAvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzk2OF8yMDQyIj4KICAgICAgICA8cmVjdAogICAgICAgIHdpZHRoPSI4LjUiCiAgICAgICAgaGVpZ2h0PSI1Ljk0IgogICAgICAgIGZpbGw9IndoaXRlIgogICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSAwLjAzMDAyOTMpIgogICAgICAgIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4=" />
        </a>
      </div>
    </div>
  );
};

export default HeaderDropdown;
