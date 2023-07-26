import React from "react";
import { AiOutlineMenu, AiOutlinePoweroff } from "react-icons/ai";

const header = () => {
  return (
    <>
      <div className="container-fluid; row bg-header">
        <div className="col">
          <div
            className="pt-2 px-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <AiOutlineMenu size={30} />
          </div>

          <div
            className="offcanvas offcanvas-start bg-header"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <div className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                Menu
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div >
            <div className="offcanvas-body">
              <table className="table table-hover text-center text-primary">
                <tbody>
              <tr><td>Sales</td></tr>
              <tr><td>DEBT</td></tr> 
              <tr><td>Order</td></tr> 
              <tr><td>Cash</td></tr>
              <tr><td>Registry</td></tr>
              <tr><td>Quatation</td></tr>
              <tr><td>Sales</td></tr>
              <tr><td>Return</td></tr>
              <tr><td>Reports</td></tr>
              <tr><td>Settings</td></tr>
              <tr><td>Release Note</td></tr>
              <tr><td><AiOutlinePoweroff/> Log Out</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h1>DPR POS System</h1>
        </div>
        <div className="col">
        <script>
const d = new Date();
d.setDate(15);
document.getElementById("demo").innerHTML = d;
</script>
        </div>
      </div>

      <div className="bg-white z-50"></div>
    </>
  );
};

export default header;
