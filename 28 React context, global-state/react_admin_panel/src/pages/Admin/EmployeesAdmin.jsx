import { Space, Table } from 'antd';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { deleteEmployeeByID, getAllEmployees } from '../../api/httprequests';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Link, useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../context/AdminUserContext';

const Employees = () => {
  const [data,setData] = useState([]);
  const{adminLocal} = useAdminContext();
  const navigate = useNavigate();
  useEffect(()=>{
    if (adminLocal===null) {
      navigate('/admin/login');
    }
   },[adminLocal,navigate]);
  useEffect(()=>{
    getAllEmployees().then(res=>{
      setData(res);
    })
  },[])
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      render: (text, record) => (
        <span>{record.name} {record.surname}</span>
      ),
      key: 'name',
      filters: data.map((item)=>{
        return {
          text: item.name,
          value: item.name
        }
      }),
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Image',
      dataIndex: 'url',
      key: 'url',
      render: (text, record) => (
        <img style={{objectFit:'cover'}} width={70} height={70} src={record.url} alt={record.name}/>
      ),
    },
    {
      title: 'Salary $',
      dataIndex: 'salary',
      key: 'salary',
      sorter: (a, b) => a.salary - b.salary,
      sortOrder: sortedInfo.columnKey === 'salary' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Delete',
      render: (text, record) => (
        <Button onClick={()=>{
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: `Are you sure to delete ${record.name} ${record.surname}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              deleteEmployeeByID(record.id);
              const filteredData = data.filter((item)=>item.id!==record.id);
              setData(filteredData);
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your employee has been deleted.',
                'success'
              )
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your employee is safe :)',
                'error'
              )
            }
          })
        }} variant='contained' color='error'><DeleteIcon/></Button>
      ),
    },
    {
      title: 'Edit',
      render: (text, record) => (
        <Link to={`employees/edit/${record.id}`}><Button variant='contained' color="primary"><EditIcon/></Button></Link>
      ),
    },
  ];
  return (
    <>
    <Space style={{marginTop:'30px',marginLeft:'50px'}}>
      <Button variant="outlined" color='error' onClick={setAgeSort}>Sort age</Button>
      <Button variant='outlined' color='warning' onClick={clearFilters}>Clear filters</Button>
      <Button variant='outlined' color='info' onClick={clearAll}>Clear filters and sorters</Button>
    </Space>
    <Table style={{
        display:'block',
        width:'80%',
        margin:'30px auto'
      }} columns={columns} dataSource={data} onChange={handleChange} />
    </>
  )
}

export default Employees