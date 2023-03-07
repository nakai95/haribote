import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";

import { Article } from "@/domains/models";

export const ArticleRow: React.FC<{
  row: Article;
  selected?: boolean;
  onClick: () => void;
}> = ({ row, selected, onClick }) => {
  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row.id}
      selected={selected}
      onClick={onClick}
    >
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.title}</TableCell>
    </TableRow>
  );
};
