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
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be47f9a65715902e39e82_sales.svg" />
              <li>Sales & Marketing</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be5b2dc1d409ae8b31c11_payments.svg" />
              <li>Payments</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be5af86ef8e29810e902f_analytics.svg" />
              <li>Analytics & Reporting</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be5af27a9fa04c33d88b3_creator-support-services.svg" />
              <li>Support Services</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be5b2f4e21d5897b086b0_page-builder.svg" />
              <li>Site Builder</li>
            </div>
          </div>
          <div>
            <div className="rs-nav-links">
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be5b1c15aedc3eb195b31_memberships.svg" />
              <li>Memberships</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be5af02a0d530f59fd683_ai-hub.svg" />
              <li>AI Features</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be5af5439880199d78517_integrations.svg" />
              <li>App Hub</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be5b260c754e55a40f55e_student-engagement.svg" />
              <li>User Accounts</li>
            </div>
            <div className="rs-nav-links">
              <img src="https://assets-global.website-files.com/65393b768d06ee4c16d24a0b/653be5ae54572c1efd5a55b6_advanced-features.svg" />
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
