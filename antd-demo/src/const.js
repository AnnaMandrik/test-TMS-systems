import {getRandomIntInclusive} from './utils';
import {Select} from 'antd';



const { Option } = Select;

const APPLY_COUNT = 20;
export const POINT_NAME = [
    {
        name: 'east',
        lat: 59.908492,
        lng: 30.513537,
    },
    {
        name: 'west',
        lat: 59.876397,
        lng: 30.257601,
    },
    {
        name: 'south',
        lat: 59.807224,
        lng: 30.379514,
    },
    {
        name: 'north',
        lat: 60.082456,
        lng: 30.264154,
    },
    
];
const APPLYERS_LIST = ['ИП Бубль', 'ООО Консоль', 'ЗАО ЧипИДейл', 'ОАО Вась', 'Иванов И.И']



const createSelector = () => {

   const eachName = POINT_NAME[getRandomIntInclusive(0, POINT_NAME.length-1)].name;
    
    return (
        <Select defaultValue={eachName} style={{ width: 120 }} allowClear> 
                <Option value={POINT_NAME[0].name}>{POINT_NAME[0].name}</Option>
                <Option value={POINT_NAME[1].name}>{POINT_NAME[1].name}</Option>
                <Option value={POINT_NAME[2].name}>{POINT_NAME[2].name}</Option>
                <Option value={POINT_NAME[3].name}>{POINT_NAME[3].name}</Option>
        </Select>
    );
}


const makeDataSource = () => ({
    key: String(Math.floor(Math.random() * 100000)),
    application: APPLYERS_LIST[getRandomIntInclusive(0, APPLYERS_LIST.length-1)],
    load: createSelector(),
    unload: createSelector(),
  });
  
export const dataSource = new Array(APPLY_COUNT)
  .fill(null)
  .map(makeDataSource);

export const columns = [
    {
      title: 'Заявка',
      dataIndex: 'application',
      key: 'application',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Погрузка',
      dataIndex: 'load',
      key: 'load',
    },
    {
      title: 'Разгрузка',
      dataIndex: 'unload',
      key: 'unload',
    },
  ];

  export const ErrorMessage =  {
    NetworkError: 'Network Error',
  }