import { useEffect, useState } from "react";
import axios from "../../helper/axios";
// components
import Table from "../../components/admin/Table";
import LoadingTable from "../../components/admin/LoadingTable";

const VerificationData = () => {
  const [loading, setLoading] = useState(true);
  const adminToken = localStorage.getItem("adminToken");

  // get riders data
  const [ridersData, serRidersData] = useState([]);
  const getData = async () => {
    try {
      const resp = await axios.get("/admin-get-riders", {
        headers: { authorization: adminToken },
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  });

  return (
    <div className="w-full">
      {/* table */}
      <div className="w-[99%] m-auto my-5">
        {loading ? <LoadingTable /> : <Table getData={getData} />}
      </div>
    </div>
  );
};

export default VerificationData;
