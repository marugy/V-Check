import VesselItem from "./VesselItem";
import { useState } from "react";

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "own", name: "소유 선박" },
  { value: "non-owned", name: "미소유 선박" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const VesselList = ({ vesselList, btnType, listType }) => {
  const [filter, setFilter] = useState("all");

  const getProcessedVesselList = () => {
    const filterCallBack = (item) => {
      if (filter === "own") {
        return item.ownership === true;
      } else {
        return item.ownership === false;
      }
    };

    const copyList = JSON.parse(JSON.stringify(vesselList));

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    return filteredList;
  };

    let controlMenu;
      if(listType=="lookUp"){
        controlMenu = <ControlMenu
        value={filter}
        onChange={setFilter}
        optionList={filterOptionList}
      />
      }

  return (
    <div className="VesselList">
      <div>
        {controlMenu}
        {getProcessedVesselList().map((it) => (
          <VesselItem key={it.imo} {...it} btnType={btnType} />
        ))}
      </div>
    </div>
  );
};

VesselList.defaultProps = {
  vesselList: [],
};
export default VesselList;
