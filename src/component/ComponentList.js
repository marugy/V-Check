import ComponentItem from "./ComponentItem";

const ComponentList = ({ componentList, imo }) => {
  return (
    <div className="ComponentList">
      {componentList.map((it) => (
        <ComponentItem key={it.componentId} {...it} imo={imo} />
      ))}
    </div>
  );
};

ComponentList.defaultProps = {
  componentList: [],
};

export default ComponentList;
