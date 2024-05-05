import "./marketnews.css";
// import { type MarketNewsType } from "../../../pages/Financials/Financials";

const dummyData = [
  {
    image: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate accusamus recusandae veniam. Vitae ex odit sediure debitis.",
    source: "Business Insider",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate accusamus recusandae veniam. Vitae ex odit sediure debitis.",
    source: "Business Insider",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate accusamus recusandae veniam. Vitae ex odit sediure debitis.",
    source: "Business Insider",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate accusamus recusandae veniam. Vitae ex odit sediure debitis.",
    source: "Business Insider",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate accusamus recusandae veniam. Vitae ex odit sediure debitis.",
    source: "Business Insider",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate accusamus recusandae veniam. Vitae ex odit sediure debitis.",
    source: "Business Insider",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate accusamus recusandae veniam. Vitae ex odit sediure debitis.",
    source: "Business Insider",
    link: "#",
  },
];

// type MarketNewsProps = {
//   news: MarketNewsType[]
// }

export const MarketNews = (news) => {
  // If API data cannot be fetched, return placeholder data
  console.log(news.news);
  return (
    <div className="market-news-section">
      <h2>News</h2>
      <div className="news-container">
        {news.news.length ? (
          <ul>
            {news.news.map((item) => (
              <li>
                <img src={item.image} />
                <div>
                  <p>{item.title}</p>
                  <p>{item.source}</p>
                  <a href={item.link}>Read more</a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {/* {dummyData.map((item) => (
              <li>
                <img src={item.image} />
                <div>
                  <p>{item.title}</p>
                  <p>{item.source}</p>
                  <a href={item.link}>Read more</a>
                </div>
              </li>
            ))} */}
          </ul>
        )}
      </div>
    </div>
  );
};
