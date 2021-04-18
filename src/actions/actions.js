export const updateTable = (data) => ({
  type: "TableSet",
  data: data,
});

export const deleteTable = (data) => ({
  type: "DeleteTable",
  data: data,
});

export const searchTable = (data) => ({
  type: "Search",
  data: data,
});

export const searchStartTable = (data) => ({
  type: "SearchStart",
  data: data,
});

export const searchEndTable = (data) => ({
  type: "SearchEnd",
  data: data,
});

export const togglePageReducer = (data) => ({
  type: "PageChange",
  data: data,
});
