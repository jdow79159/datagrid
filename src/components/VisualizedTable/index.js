import React, { createContext, forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

import Row from "./../Row";
import StickyRow from "./../StickyRow";
export default ({ height }) => {
  const StickyListContext = createContext();
  StickyListContext.displayName = "StickyListContext";

  const ItemWrapper = ({ data, index, style }) => {
    const { ItemRenderer } = data;
    const reStyle = {...style, top: (index + 1) * 22};
    return <ItemRenderer index={index} style={reStyle} />;
  };

  const innerElementType = forwardRef(({ children, ...rest }, ref) => (
    <StickyListContext.Consumer>
      {() => (
        <div ref={ref} {...rest}>
            <StickyRow
              index={0}
              // key={index}
              style={{ top: 0, left: 0, height: 22 }}
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
      itemCount={1000}
      itemSize={22}
      stickyIndices={[0]}
      width={"100%"}
    >
      {Row}
    </StickyList>
  );
};
