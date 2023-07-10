import "./filter.css";

const Filter = ({ value, onChange }) => {
  return (
    <label className="Filter_Todo">
      Фільтер по назві <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;
