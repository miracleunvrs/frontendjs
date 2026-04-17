import React, { useMemo, useState, useCallback } from "react";
import { List } from "react-window";
import type { RowComponentProps } from "react-window";
import { generateItems } from "../utils/generateItems";

export function VirtualList({ itemCount = 10000, height = 500 }) {
  const [filter, setFilter] = useState("");
  const allItems = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    if (!filter) return allItems;
    return allItems.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [allItems, filter]);

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value);
    },
    [],
  );

  // Функция рендера одного ряда
  const Row = useCallback(
    ({ index, style, ariaAttributes }: RowComponentProps) => {
      const item = filteredItems[index];

      // Защита от undefined при фильтрации
      if (!item) return null;

      return (
        <div style={style} className="list-item" {...ariaAttributes}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <span className="category">{item.category}</span>
        </div>
      );
    },
    [filteredItems],
  );

  return (
    <div className="virtual-list-container">
      <input
        type="text"
        placeholder="Filter items..."
        onChange={handleFilterChange}
        value={filter}
      />
      <div>Showing {filteredItems.length} items</div>

      <List
        style={{ height, width: "100%" }}
        rowCount={filteredItems.length}
        rowHeight={80}
        rowComponent={Row}
        rowProps={{} as React.ComponentProps<typeof List>['rowProps']} // Bypass TS inference error
      />
    </div>
  );
}
