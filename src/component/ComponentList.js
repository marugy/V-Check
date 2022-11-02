import ComponentItem from "./ComponentItem";

const ComponentList = ({ componentList }) => {
  return (
    <div className="ComponentList">
      {componentList.map((it) => (
        <ComponentItem />
      ))}
    </div>
  );
};

ComponentList.defaultProps = {
  componentList: [],
};

export default ComponentList;
