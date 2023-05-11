import { Button, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { useBasketContext } from "../../context/BasketContext";

const Basket = () => {
  const{basket,setBasket} = useBasketContext();
  function handleClearBasket(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure to empty favorites?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setBasket([]);
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your favorites has been cleared.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your favorites is safe :)',
          'error'
        )
      }
    })
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "70vh",
      }}
    >
      <div>
        <Typography align="center">
          You Have {basket.length} employees in your favorites!
        </Typography>
        <Button onClick={handleClearBasket} style={{display:'block',margin:'20px auto'}} variant="contained" color="warning">
          Clear All?
        </Button>
      </div>
    </div>
  );
};

export default Basket;
