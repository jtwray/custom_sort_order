import React from "react";

function getChunks(fullList, chunkSize) {
  const paginatedList = [];
  for (let idx = 0; idx < fullList.length; idx += chunkSize) {
    let newChunk = fullList.slice(idx, idx + chunkSize);
    paginatedList.push(newChunk);
  }
}

// const paginatedList = React.useMemo(() => {
//   return getChunks(fullList);
// }, [fullListUpdatedAtTimeStamp]);

function getPageOfItems(chunkSize, pageNumber, fullList) {
  const firstItemOfSelectedPage = pageNumber * chunkSize;
  const lastItemOfSelectedPage = pageNumber * chunkSize + chunkSize;
  return fullList.slice(firstItemOfSelectedPage, lastItemOfSelectedPage);
}
export function usePagination(
  _pageSize = 5,
  _pageNumber = 0,
  _fullListOfIds = []
  // listUpdatedAtTimeStamp = Date.now()
) {
  const [pageSize, setPageSize] = React.useState(() => _pageSize);
  const [pageNumber, setPageNumber] = React.useState(() => _pageNumber);
  const [fullListOfIds, setFullListOfIds] = React.useState(
    () => _fullListOfIds
  );

  const pageOfItems = React.useMemo(() => {
    return getPageOfItems(pageSize, pageNumber, fullListOfIds);
  }, [pageSize, pageNumber, fullListOfIds]);
  return {
    pageOfItems,
    pageSize,
    pageNumber,
    fullListOfIds,
    setPageSize,
    setPageNumber,
    setFullListOfIds
  };
}
