import BlockItem from "./BlockItem";

const BlockList = ({ blockList, btnType, state }) => {
  return (
    <div className="BlockList">
      {blockList.map((it) => (
        <BlockItem key={it.blockName} {...it} state={state} />
      ))}
    </div>
  );
};

BlockList.defaultProps = {
  blockList: [],
};

export default BlockList;
