import { useState } from "react";
import ComponentItem from "./ComponentItem";
import ComponentEnroll from "./ComponentEnroll";

const ComponentList = ({ componentList, imo, blockName }) => {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  const componentAdd = () => {
    setEnrollModalOpen(true);
  };

  const buttonOn = () => {
    if (localStorage.getItem("clientType") == "INSPECTOR")
      return <button onClick={componentAdd}>부품 업로드</button>;
    else return;
  };

  const componentEnrollBtn = buttonOn();

  return (
    <div className="ComponentList">
      <div className="btn">{componentEnrollBtn}</div>
      {componentList.map((it) => (
        <ComponentItem key={it.componentId} {...it} imo={imo} />
      ))}

      {enrollModalOpen && (
        <ComponentEnroll
          setEnrollModalOpen={setEnrollModalOpen}
          blockName={blockName}
        />
      )}
    </div>
  );
};

ComponentList.defaultProps = {
  componentList: [],
};

export default ComponentList;
