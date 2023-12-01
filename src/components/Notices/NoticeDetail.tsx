import { useGetNoticeDetailQuery } from "../../api/notice/noticeApi";
import { useParams } from "react-router-dom";
import { Badge, Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

const NoticeDetail = () => {
  const { id } = useParams();

  const { data } = useGetNoticeDetailQuery(Number(id));
  if (!data) return <span>Loading...</span>;
  console.log(data);

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Product",
      children: "Cloud Database",
    },
    {
      key: "2",
      label: "Billing Mode",
      children: "Prepaid",
    },
    {
      key: "3",
      label: "Automatic Renewal",
      children: "YES",
    },
    {
      key: "4",
      label: "Order time",
      children: "2018-04-24 18:00:00",
    },
    {
      key: "5",
      label: "Usage Time",
      span: 2,
      children: "2019-04-24 18:00:00",
    },
    {
      key: "6",
      label: "Status",
      span: 3,
      children: <Badge status="processing" text="Running" />,
    },
    {
      key: "7",
      label: "Negotiated Amount",
      children: "$80.00",
    },
    {
      key: "8",
      label: "Discount",
      children: "$20.00",
    },
    {
      key: "9",
      label: "Official Receipts",
      children: "$60.00",
    },
    {
      key: "10",
      label: "Config Info",
      children: (
        <>
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
          <br />
        </>
      ),
    },
  ];

  return (
    <div>
      <div>디테일</div>
    </div>
  );
};

export default NoticeDetail;
