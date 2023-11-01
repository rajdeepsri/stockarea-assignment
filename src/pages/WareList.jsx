import { useSelector } from "react-redux";
import Card from "../components/Card";
import Search from "../components/Search";

const WareList = () => {
  const { filteredData } = useSelector((state) => state.warehouse);

  return (
    <>
      <nav>
        <Search />
      </nav>
      <div className="card-container">
        {filteredData.length <= 0 ? (
          <h1>No Data...</h1>
        ) : (
          filteredData.map((item) => <Card {...item} key={item.id} />)
        )}
      </div>
    </>
  );
};

export default WareList;
