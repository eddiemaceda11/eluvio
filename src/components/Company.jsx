const Company = ({ company }) => {
  return (
    <li>
      {company.name} founded on {company.founded}
    </li>
  );
};

export default Company;
