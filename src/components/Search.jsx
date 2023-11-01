import { useDispatch, useSelector } from "react-redux";
import { setFilteredData, setSearchTerm } from "../redux/warehouseSlice";
import { useEffect } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const { searchTerm, warehousesData } = useSelector(
    (state) => state.warehouse
  );

  useEffect(() => {
    let filteredItems;
    if (searchTerm === "") filteredItems = warehousesData;
    else {
      filteredItems = warehousesData.filter((item) => {
        const nameMatch = item.name
          .toLowerCase()
          .startsWith(searchTerm.toLowerCase());
        const cityMatch = item.city
          .toLowerCase()
          .startsWith(searchTerm.toLowerCase());
        const clusterMatch = item.cluster
          .toLowerCase()
          .startsWith(searchTerm.toLowerCase());
        const space = toString(item.space_available);
        const spaceMatch = space.startsWith(searchTerm.toLowerCase());
        return nameMatch || cityMatch || clusterMatch || spaceMatch;
      });
    }
    dispatch(setFilteredData(filteredItems));
  }, [searchTerm, warehousesData, dispatch]);

  return (
    <input
      className="search-input"
      placeholder="Search for Warehouses by name or city or cluster or space available..."
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
};

export default Search;
