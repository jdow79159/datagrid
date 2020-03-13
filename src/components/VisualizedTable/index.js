import React, {createContext, forwardRef} from "react";
import { FixedSizeList as List } from "react-window";
import { rowHeight} from "../../config";
import Row from "./../Row";
import StickyRow from "./../StickyRow";
import { useSelector} from "react-redux";
export default ({ height }) => {
  const StickyListContext = createContext();
  StickyListContext.displayName = "StickyListContext";
  const rowCount = useSelector(state=>state.table.currentData.length);
  const ItemWrapper = ({ data, index, style }) => {
    const { ItemRenderer } = data;
    const reStyle = {...style, top: (index + 1) * rowHeight};
    return <ItemRenderer index={index} style={reStyle} />;
  };

  const innerElementType = forwardRef(({ children, ...rest }, ref) => (
    <StickyListContext.Consumer>
      {() => (
        <div ref={ref} {...rest}>
            <StickyRow
              index={0}
              style={{ top: 0, left: 0, height: rowHeight }}
            />
          {children}
        </div>
      )}
    </StickyListContext.Consumer>
  ));

  const StickyList = ({ children, stickyIndices, ...rest }) => (
    <StickyListContext.Provider
      value={{ ItemRenderer: children, stickyIndices }}
    >
      <List itemData={{ ItemRenderer: children, stickyIndices }} {...rest}>
        {ItemWrapper}
      </List>
    </StickyListContext.Provider>
  );
  return (
    <StickyList
      height={height}
      innerElementType={innerElementType}
      itemCount={rowCount}
      itemSize={rowHeight}
      stickyIndices={[0]}
      width={"100%"}
    >
      {Row}
    </StickyList>
  );
};
