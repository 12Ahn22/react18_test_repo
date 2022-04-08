import React, { useState } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

const Sortable = () => {

  const [treeData, setTreeData] = useState<any>([
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'fingerline' }] },
  ]);
  return (
    <div>
      <h1>SortableTree</h1>
      <SortableTree
        treeData={treeData}
        isVirtualized={false}
        onChange={treeData => setTreeData(treeData)} />
    </div>
  )
}

export default Sortable;