import 'antd/dist/antd.css';
import {Table} from 'antd';
//import {useState} from 'react';
import { dataSource, columns } from '../../const';
import MapPage from '../map-page/map-page';
import 'leaflet/dist/leaflet.css';
import $ from 'jquery';


function TableMain() {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  $(document).ready(function(){
    $('html').on('mousedown','.element',function() {
      $(this).css('cursor','e-resize').addClass('elementMove');
      $('.table-content, .map-content').addClass('selectOff');
      $('.page-content__wrapper').on('mousemove',function(e) {
        console.log('run');
        var CursorPosition = e.pageX - $('body').offset().left;
        var WrapperWidth = $('.wrapper').width();
  
        $('.elementMove').css('left',CursorPosition);
        $('.table-content').css('width',CursorPosition);
        $('.map-content').css('width',WrapperWidth - CursorPosition);
      });
    });
  
    $('html').on('mouseup','.element',function() {
      $(this).css('cursor','default').removeClass('elementMove');
      $('.table-content, .map-content').removeClass('selectOff');
      $('.page-content__wrapper').unbind('mousemove');
    });
  });
  
    return (
      <div>
        <header></header>
        <main className='page-content'>
          <div className='page-content__wrapper'>
            <div className='table-content'>
              <Table rowSelection={{
                     
                    ...rowSelection,
                    }}
                dataSource={dataSource}
                columns={columns}
                size='small'
                scroll={{ x: 300 }} />
            </div>
            <div className='map-content'>
              <MapPage />  
            </div>
            <div className='element'></div>
          </div>
        </main>
        <footer></footer>
      </div>

    );
}

export default TableMain;