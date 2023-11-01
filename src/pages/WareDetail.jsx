import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setWarehousesData } from "../redux/warehouseSlice";

const WareDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { warehousesData } = useSelector((state) => state.warehouse);
  const requiredData = warehousesData.find((item) => item.id === parseInt(id));
  const [editedData, setEditedData] = useState(requiredData);
  const {
    name,
    code,
    city,
    space_available,
    type,
    cluster,
    is_registered,
    is_live,
  } = editedData;
  const [customFields, setCustomFields] = useState([]);

  const handleAddCustomField = () =>
    setCustomFields([...customFields, { name: "", value: "" }]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (field, value) => {
    setEditedData({ ...editedData, [field]: value });
  };

  const handleCustomFieldNameChange = (index, name) => {
    const updatedFields = [...customFields];
    updatedFields[index].name = name;
    setCustomFields(updatedFields);
  };

  const handleCustomFieldValueChange = (index, value) => {
    const updatedFields = [...customFields];
    updatedFields[index].value = value;
    setCustomFields(updatedFields);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const mergedData = { ...editedData };
    customFields.forEach((field) => {
      mergedData[field.name] = field.value;
    });

    const updatedWarehouses = warehousesData.map((item) =>
      item.id === parseInt(id) ? mergedData : item
    );
    dispatch(setWarehousesData(updatedWarehouses));
    navigate("/");
  };

  return (
    <>
      <nav>
        <Link to="/" className="back-btn">
          Go Back
        </Link>
      </nav>
      <h1>Edit Warehouse Details</h1>
      <div className="form-container">
        <form onSubmit={handleSaveChanges}>
          <div className="form-div">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>Code</label>
            <input
              type="text"
              name="code"
              value={code}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>Space Available</label>
            <input
              type="text"
              name="space_available"
              value={space_available}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>Type</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>Cluster</label>
            <input
              type="text"
              name="cluster"
              value={cluster}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>Registered</label>
            <div>
              <label htmlFor="yes">Yes</label>
              <input
                id="yes"
                type="radio"
                name="is_registered"
                value="true"
                checked={is_registered === true}
                onChange={() => handleRadioChange("is_registered", true)}
              />
            </div>
            <div>
              <label htmlFor="no">No</label>
              <input
                id="no"
                type="radio"
                name="is_registered"
                value="false"
                checked={is_registered === false}
                onChange={() => handleRadioChange("is_registered", false)}
              />
            </div>
          </div>
          <div className="form-div">
            <label>Live</label>
            <div>
              <label htmlFor="yes">Yes</label>
              <input
                id="yes"
                type="radio"
                name="is_live"
                value="true"
                checked={is_live === true}
                onChange={() => handleRadioChange("is_live", true)}
              />
            </div>
            <div>
              <label htmlFor="no">No</label>
              <input
                id="no"
                type="radio"
                name="is_live"
                value="false"
                checked={is_live === false}
                onChange={() => handleRadioChange("is_live", false)}
              />
            </div>
          </div>
          {/* custom fields */}
          <div className="form-div custom-field-div">
            {customFields.length > 0 &&
              customFields.map((field, idx) => (
                <div key={idx} style={{ width: "100%", margin: "0.2rem 0" }}>
                  <input
                    type="text"
                    value={field.name}
                    placeholder="Field Name"
                    onChange={(e) =>
                      handleCustomFieldNameChange(idx, e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={field.value}
                    placeholder="Field Value"
                    onChange={(e) =>
                      handleCustomFieldValueChange(idx, e.target.value)
                    }
                  />
                </div>
              ))}
            <button
              className="btn custom-btn"
              type="button"
              onClick={handleAddCustomField}
            >
              Add Custom Field
            </button>
          </div>
          <button type="submit" className="btn">
            Save Changes
          </button>
          {/* <button>Submit Changes</button> */}
        </form>
      </div>
    </>
  );
};

export default WareDetail;
