import { Order } from "@/types/type";
import { useState } from "react";

export const useSort = <T extends Record<string, any>>(
  initialOrderBy: keyof T
) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof T>(initialOrderBy);

  /**
   * ソート順とソートするプロパティを更新する
   */
  const handleRequestSort = (
    _event: React.MouseEvent<HTMLSpanElement>,
    property: keyof T
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return { order, orderBy, handleRequestSort };
};
