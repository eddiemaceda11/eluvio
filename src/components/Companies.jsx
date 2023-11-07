import Company from "./Company";

const dummyCompanyData = [
  {
    name: "Company 1",
    founded: 1981,
    id: 1,
  },
  {
    name: "Company 2",
    founded: 2017,
    id: 2,
  },
  {
    name: "Company 3",
    founded: 2020,
    id: 3,
  },
  {
    name: "Company 4",
    founded: 1974,
    id: 4,
  },
  {
    name: "Company 5",
    founded: 1997,
    id: 5,
  },
];

const Companies = () => {
  return (
    <section className="companies">
      <ul>
        {dummyCompanyData.map((company) => (
          <Company
            key={company.id}
            company={company}
          />
        ))}
      </ul>
    </section>
  );
};

export default Companies;
