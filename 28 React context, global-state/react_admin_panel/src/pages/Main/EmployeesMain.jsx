import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Card, Col, Divider, Row } from "antd";
import { Link, useOutletContext } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getAllEmployees } from "../../api/httprequests";
import { useBasketContext } from "../../context/BasketContext";

const Employees = () => {
  const{basket,setBasket} = useBasketContext();
  const[employees,setEmployees] = useState([]);
  const[filteredEmployees,setFilteredEmployees] = useState([]);
  const[loading,setLoading] = useState(true);
  useEffect(()=>{
    getAllEmployees().then(res=>{
      setEmployees(res);
      setFilteredEmployees(res);
      setLoading(false);
    })
  },[setEmployees]);
  function handleSearch(e){
   const filteredEmployees = employees.filter((employee)=>employee.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()) || employee.surname.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
   setFilteredEmployees(filteredEmployees);
  }
  return (
    <>
      <Divider
        orientation="center"
        style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}
      >
        Employees
      </Divider>
      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextField
          id="standard-basic"
          label="Search Employee"
          variant="outlined"
          onChange={(e)=>handleSearch(e)}
        />
      </div>
      <Row
        style={{ width: "80%", margin: "0 auto" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        {filteredEmployees && filteredEmployees.map((employee)=>{
          return <Col key={employee.id} className="gutter-row" span={6} lg={6} md={12} sm={24}>
          <Card
            hoverable
            style={{ width: "100%"}}
            cover={
              <img
                height="250px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
                alt={employee.name}
                src={employee.url}
              />
            }
          >
            <Link to={`/employees/${employee.id}`}>{employee.name} {employee.surname}</Link>
            <Typography>Position: {employee.position}</Typography>
            <Typography>Salary: {employee.salary}</Typography>
            <Button
              onClick={() => {
                setBasket([...basket,employee]);
                toast.success(`${employee.name} ${employee.surname} Successfully Add to Favorites!`);
              }}
              style={{ float: "right" }}
              variant="contained"
              color="warning"
            >
              <FavoriteIcon />
            </Button>
          </Card>
        </Col>
        })}
        {(filteredEmployees.length===0 && loading===false ) && <h1 style={{width:'100%',display:'flex',justifyContent:'center',textAlign:'center',color:'red'}}>Not Found Any Data!</h1>}
      </Row>
      { loading && <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
        <CircularProgress/>
      </div> }
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Employees;
