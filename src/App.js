import logo from "./logo.svg";
import "./App.css";
import { AgGridReact } from "ag-grid-react"; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { useMemo, useState ,useCallback, useRef } from "react";

import 'ag-grid-enterprise';

const SimpleComp = p =>  {
  const onPush = useCallback (() => window.alert('Dollar  ' + p.value))
  //const renderCountRef= useRef(1);

  return (
    <>
      <button onClick={onPush}>push</button>
      {p.value}

    </>
  );
}

const MyComp = p =>{
  const renderCountRef= useRef(2);

  return (
    <>
    <b>({renderCountRef.current++})</b>{p.value};
    </>
  )

}

const MyImg = p =>{
  const imageUrl = "./d"
}



function App() {

  const gridRef = useRef();
  const [colDefs, setColDefs] = useState([
    {field : "food"  },
    {field : "items" , cellRenderer : p => <><b>thing is</b> {p.value} </>},
    {field : "price" , cellRenderer : SimpleComp },
    {field : "veg" }

  ])

  const [rowData, setRowData] = useState([
    {food:"apple" , items :"fruit" , price : 200 , veg : true },
    {food:"mango" , items :"fruit" , price : 90 , veg : false },
    {food:"banana" , items :"fruit" , price : 50 , veg : true },
    {food:"kiwi" , items :"fruit" , price : 120 , veg : true },
  ]);
  

  const defaultColDef = useMemo (() => ({
    flex: 1,
   filter:true,
    
    sortable : true,
    filter : true,
    enableRowGroup : true,
    cellRenderer : MyComp
   
    
    

}),[]);

const cellClickedListener = useCallback(
  e => {console.log('cellclick',e);
});


  
  return (
    <div
      className="ag-theme-quartz-dark"
      style={{ height: 800 , width: 1600 }} 
    >
      < AgGridReact  rowData={rowData} 
      rowSelection="multiple"
      animateRows = {true}
      onCellClicked={cellClickedListener}
      rowGroupPanelShow="always"
      ref={gridRef}

      
      columnDefs={colDefs} defaultColDef={defaultColDef}/>
    </div>
  );
}

export default App;
