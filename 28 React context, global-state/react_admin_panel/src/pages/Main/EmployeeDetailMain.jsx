import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { getEmployeeByID } from "../../api/httprequests";
import { Card, Col, Row } from "antd";
import { Button, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Toaster, toast } from "react-hot-toast";
import { useBasketContext } from "../../context/BasketContext";

const EmployeeDetail = () => {
  const{id} = useParams();
  const[employee,setEmployee] = useState({});
  const{basket,setBasket} = useBasketContext();
  const navigate = useNavigate();
  useEffect(()=>{
    getEmployeeByID(id).then(res=>{
      setEmployee(res);
    })
  },[id]);
  function handleGoBack(){
    navigate("/employees");
  }
  return (
   <>
    <Row
    style={{ width: "80%", margin: "80px auto",display:'flex',justifyContent:'center' }}
    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
  >
    <Col key={employee.id} className="gutter-row" span={6} lg={6} md={12} sm={24}>
      <Button onClick={handleGoBack} style={{display:'block',margin:'10px auto'}} variant="contained" color="info">Go Back</Button>
      <Typography align="center" style={{marginBottom:'21px'}}>Detail Page of {employee.name} {employee.surname}</Typography>
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
  </Row>
  <Toaster position="bottom-right" reverseOrder={false} />

   </>
  )
}

export default EmployeeDetail