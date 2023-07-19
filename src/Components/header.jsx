import React from "react";
import { AiOutlineMenu, AiOutlinePoweroff } from "react-icons/ai";

const header = () => {
  return (
    <>
      <div className="row bg-header">
        <div className="col">
          <div
            className="pt-2 px-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            {" "}
            <AiOutlineMenu size={30} />{" "}
          </div>

          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sales</a> </p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">DEBT </a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Order </a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Cash </a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Registry </a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Quatation </a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sales </a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Return </a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Reports</a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Settings </a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Release Note </a></p>
              <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><AiOutlinePoweroff/> Log Out</a></p>
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
