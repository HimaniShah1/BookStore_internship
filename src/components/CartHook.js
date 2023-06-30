import { useState } from "react";

export function CartHook() {
  const [items, setItems] = useState(0);

  return { items, setItems };
}
