import VesselItem from "./VesselItem";
import { useState } from "react";

const sortOptionList = [
  { value: "imo", name: "IMO" },
  { value: "vesselName", name: "이름" },
  { value: "vesselType", name: "type" },
  { value: "isOwnerShip", name: "등록여부" },
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

const VesselList = ({ vesselList }) => {
  const [sortType, setSortType] = useState("이름");

  const getProcessedVesselList = () => {
    const compare = (a, b) => {
      if (sortType === "IMO") {
        return parseInt(b.imo) - parseInt(a.imo);
      } else {
        return parseInt(a.imo) - parseInt(b.imo);
      }
    };

    const copyList = JSON.parse(JSON.stringify(vesselList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div className="VesselList">
      <div>
        <ControlMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        {/* {getProcessedVesselList().map((it) => (
          <VesselItem key={it.imo} {...it} />
        ))} */}
      </div>
    </div>
  );
};

VesselList.defaultProps = {
  vesselList: [],
};
export default VesselList;
