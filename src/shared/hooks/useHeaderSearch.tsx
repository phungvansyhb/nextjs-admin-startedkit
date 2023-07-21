// import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
// import { Button, DatePicker, Input, InputRef, Select, Space } from 'antd';
// import { ColumnType } from 'antd/es/table';
// import { FilterConfirmProps } from 'antd/lib/table/interface';
// import { useDebugValue, useRef, useState } from 'react';
// import useTrans from './useTrans';
// import Highlighter from "react-highlight-words";
// import dayjs from 'dayjs';
// import { FieldType, Filter, OpType } from '../schema/typedef/ISearchParams';
// import { SearchCheckIcon } from 'lucide-react';
// import { useRouter } from 'next/router';

// export default function useHeaderSearch<T>(onChangeSearchParams: (value: any) => void) {
//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const searchInput = useRef<InputRef>(null);
//   const { trans } = useTrans()
//   const getColumnSearchProps = ({ dataIndex, isDate, formatFunc, fieldType, operation }: { dataIndex: keyof T, isDate?: boolean, formatFunc?: (...params: any) => string, fieldType: FieldType, operation: OpType }): ColumnType<T> => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, close, filters, }) => (
//       <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
//         {/* TODO : add more type */}
//         {filters &&
//           <Select
//             options={filters.map(item => ({ value: item.value, label: item.text }))} style={{ marginBottom: 8, display: 'block' }}
//             placeholder={`${trans.common.search} ${String(dataIndex)}`}
//             value={selectedKeys[0]}
//             onChange={(value) => setSelectedKeys([value])}
//           >
//           </Select>}
//         {isDate &&
//           <DatePicker style={{ marginBottom: 8, display: 'block' }}
//             placeholder={`${trans.common.search} ${String(dataIndex)}`}
//             value={dayjs(selectedKeys[0])}
//             allowClear={false}
//             onChange={(date, dateString) => setSelectedKeys(dateString ? [dateString] : [])} format={'YYYY-MM-DD'} />

//         }
//         {!filters && !isDate &&
//           <Input
//             ref={searchInput}
//             placeholder={`${trans.common.search} ${String(dataIndex)}`}
//             value={selectedKeys[0]}
//             onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//             // onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex, fieldType, operation)}
//             style={{ marginBottom: 8, display: 'block' }}

//           />}

//         <Space>
//           <Button
//             type='primary'
//             htmlType='button'
//             size="small"
//             onClick={() => {
//               confirm();
//               setSearchText((selectedKeys as string[])[0]);
//               setSearchedColumn(dataIndex as string);
//               const filter: Filter = {
//                 field: String(dataIndex),
//                 fieldType: fieldType,
//                 op: operation,
//                 value: isDate ? dayjs(selectedKeys[0]) : selectedKeys[0]
//               }
//               onChangeSearchParams(filter)
//             }}
//           >
//             <SearchOutlined /> {trans.common.search}
//           </Button>
//           <Button
//             size="small"
//             onClick={() => {
//               close();
//             }}
//           >
//             {trans.common.close}
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered: boolean) => (
//       filtered ? <SearchCheckIcon size={16} /> : <SearchOutlined />
//     ),
//     // onFilter: (value, record) =>
//     //   ((formatFunc ? formatFunc(record[dataIndex], record) : record[dataIndex]) as string)
//     //     .toString()
//     //     ?.toLowerCase()
//     //     ?.includes((value as string)?.toLowerCase()),
//     onFilterDropdownOpenChange: (visible) => {
//       if (visible) {
//         setTimeout(() => searchInput.current?.select(), 100);
//       }
//     },
//     render: (value, record, index) => {
//       if (searchedColumn === dataIndex) return <Highlighter
//         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//         searchWords={[searchText]}
//         autoEscape
//         textToHighlight={(() => {
//           if (value) {
//             return formatFunc ? formatFunc(value.toString(), record, index) : value.toString()
//           } else return ''
//         })()}
//       />
//       else {
//         return formatFunc ? formatFunc(value, record, index) : value
//       }
//     }
//   });
//   return { getColumnSearchProps }
// }