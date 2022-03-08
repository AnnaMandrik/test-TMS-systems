import 'antd/dist/antd.css';
import { Table} from 'antd';
//import {useState} from 'react';
import { dataSource, columns } from '../../const';
import Map from '../map/map';


function TableMain() {
  //const [selectionType, setSelectionType] = useState('checkbox');

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
    return (
        <div>
        <header></header>
        <main className='page-content'>
          <div className='page-content__column'>
              <div className='table-content'>
              

                <Table rowSelection={{
                     
                      ...rowSelection,
                     }}
                dataSource={dataSource}
                columns={columns}
                size='small'
                scroll={{ x: 800 }} />
              </div>
          </div>
          <div className='page-content__column'>
            <div className='map-content'>
              <Map />  
            </div>
          </div>
          
        </main>
        <footer></footer>
      </div>

    );
}

export default TableMain;