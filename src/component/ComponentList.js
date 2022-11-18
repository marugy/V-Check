import ComponentItem from "./ComponentItem";

const ComponentList = ({ componentList }) => {
  return (
    <div className="ComponentList">
      {componentList.map((it) => (
        <ComponentItem key={it.componentId} {...it} />
      ))}
    </div>
  );
};

ComponentList.defaultProps = {
  componentList: [],
};

export default ComponentList;
