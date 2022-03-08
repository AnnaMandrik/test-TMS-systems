import {getRandomIntInclusive} from './utils';
import {Select} from 'antd';



const { Option } = Select;

const APPLY_COUNT = 20;
const POINT_NAME = ['east', 'west', 'south', 'north'];
const APPLYERS_LIST = ['ИП Бубль', 'ООО Консоль', 'ЗАО ЧипИДейл', 'ОАО Вась', 'Иванов И.И']



const createSelector = () => {

   const eachName = POINT_NAME[getRandomIntInclusive(0, POINT_NAME.length-1)]
    
    return (
        <Select defaultValue={eachName} style={{ width: 120 }} allowClear> 
                <Option value={POINT_NAME[0]}>{POINT_NAME[0]}</Option>
                <Option value={POINT_NAME[1]}>{POINT_NAME[1]}</Option>
                <Option value={POINT_NAME[2]}>{POINT_NAME[2]}</Option>
                <Option value={POINT_NAME[3]}>{POINT_NAME[3]}</Option>
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
    