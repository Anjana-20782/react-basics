import React from 'react'

const MemoizedList = () => {

    const ListItem= React.memo(({data})=><li>{data}</li>);

    const items=["lipstick","compactPowder","lipliner","eyelinear","mascara","eyeshadow","eyebrowpencil"]

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} data={item} />
      ))}
    </ul>
  );
};

export default MemoizedList;