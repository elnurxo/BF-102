import { Modal, Space, Table } from "antd";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useLocalStorage from "../hooks/useLocalStorage";
import TextField from "@mui/material/TextField";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AntDesignTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[editingSupplier,setEditingSupplier] = useState({});
  const showModal = (item) => {
    setEditingSupplier(item);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [supplier, setSupplier] = useState([]);
  const [basket, setBasket] = useLocalStorage("basket", []);

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
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
      order: "descend",
      columnKey: "age",
    });
  };
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => res.json())
      .then((data) => {
        setSupplier(data);
      });
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
      key: "contactName",
      filters: supplier.map((item) => {
        return {
          text: item.contactName,
          value: item.contactName,
        };
      }),
      filteredValue: filteredInfo.contactName || null,
      onFilter: (value, record) => record.contactName.includes(value),
      sorter: (a, b) => a.contactName.length - b.contactName.length,
      sortOrder:
        sortedInfo.columnKey === "contactName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
      sorter: (x, y) => x.companyName.length - y.companyName.length,
      sortOrder:
        sortedInfo.columnKey === "companyName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Address",
      dataIndex: ["address", "city"],
      key: "address",
    },
    {
      title: "Add To Basket",
      render: (item) => {
        return (
          <Button
            variant="outlined"
            color="warning"
            onClick={() => {
              //add to basket
              setBasket([...basket, item]);
              //toaster
              toast.success("supplier added to basket", {
                icon: "👏",
              });
            }}
          >
            Add To Basket
          </Button>
        );
      },
    },
    {
      title: "Edit Product",
      render: (item) => {
        return (
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
                showModal(item)
            }}
          >
            Edit Supplier
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Space>
        <Button variant="contained" onClick={setAgeSort}>
          Sort Id
        </Button>
        <Button variant="contained" onClick={clearFilters}>
          Clear Filters
        </Button>
        <Button variant="contained" color="error" onClick={clearAll}>
          Clear filters and sorters
        </Button>
      </Space>
      <Table
        style={{ display: "block", width: "80%", margin: "25px auto" }}
        columns={columns}
        dataSource={supplier}
        onChange={handleChange}
      />
      <Toaster position="top-center" />
      <Modal
        title="EDIT PRODUCT"
        open={isModalOpen}
      >
        <form>
          <TextField id="outlined-basic"  style={{marginRight:'20px'}} label="Company Name" value={editingSupplier.companyName} variant="outlined" />
          <TextField id="outlined-basic" label="Contact Name" value={editingSupplier.contactName} variant="outlined" />
          <Button onClick={()=>{
            fetch(`https://northwind.vercel.app/api/suppliers/${editingSupplier.id}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(updatedSupplier)
            })
            
          }} style={{marginTop:'30px'}} type="submit" variant="contained" color="success">Edit Product</Button>
        </form>
      </Modal>
    </>
  );
};

export default AntDesignTable;
