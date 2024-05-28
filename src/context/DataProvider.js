import React, { createContext, useState, useEffect } from 'react'

//데이터를 받아서 저장할 Context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
     "menu": [],
     "about": [{"title":""},{"desc":[]}]
  });

  useEffect(()=>{
    fetch('./data/data.json')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error=>console.error('데이터를 가져오는데 실패했습니다.' , error));
  }, []);

  return (
    <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
  )
}
