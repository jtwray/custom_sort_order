import React from "react";

function getChunks(fullList, chunkSize) {
  const paginatedList = [];
  for (let idx = 0; idx < fullList.length; idx += chunkSize) {
    let newChunk = fullList.slice(i, i + chunkSize);
    paginatedList.push(newChunk);
  }
}

const paginatedList = React.useMemo(() => {
  return getChunks(fullList);
}, [fullListUpdatedAtTimeStamp]);

function getPageOfItems(chunkSize, pageNumber, fullList) {
  const firstItemOfSelectedPage = pageNumber * chunkSize;
  const lastItemOfSelectedPage = pageNumber * chunkSize + chunkSize;
  return fullList.slice(firstItemOfSelectedPage, lastItemOfSelectedPage);
}

const pageOfItems = React.useMemo(
  (chunkSize, listUpdatedAtTimeStamp, pageNumber) => {
    getPageOfItems(chunkSize, pageNumber, fullList);
  },
  [chunkSize, listUpdatedAtTimeStamp, pageNumber]
);
