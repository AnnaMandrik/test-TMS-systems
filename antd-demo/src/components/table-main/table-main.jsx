
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];




function TableMain() {
    return (
        <div>
        <header></header>
        <main className='page-content'>
          <div className='page-content__column'>
              <div className='table-content'>
              <Table dataSource={dataSource} columns={columns} />;

              </div>
          </div>
          <div className='page-content__column'>
            <div className='map-content'></div>
          </div>
          
        </main>
        <footer></footer>
      </div>

    );
}

export default TableMain;