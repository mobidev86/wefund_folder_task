import { React } from "react";
import { Modal } from "antd";
const style = {
  padding: "8px 0",
  textAlign: "center",
  backgroundColor: "lightgoldenrodyellow",
  // backgroundColor: "black",
  fontFamily: "Georgia, serif",
};

function MyLoaderModal({ status, message }) {
  return (
    <>
      <Modal
        centered
        bodyStyle={style}
        visible={status}
        closable={false}
        footer={null}
      >
        <div>{message}</div>
      </Modal>
    </>
  );
}
export default MyLoaderModal;
