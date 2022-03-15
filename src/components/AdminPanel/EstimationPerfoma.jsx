import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Dropdown,
  Menu,
  message,
  Select,
  Upload,
  Col,
  InputNumber,
  DatePicker,
  Space,
  Rate,
  Table
} from "antd";


const axios = require("axios");

export default function EstimationPerfoma() {
  const [project, setProject] = useState();
  const [location, setLocation] = useState();
  const [caretaker, setCaretaker] = useState();
  const [cellno, setCellno] = useState();
  const [date, setDate] = useState();
  const [materialName, setMaterialName] = useState();
  const [materialAU, setMaterialAU] = useState();
  const [materialQTY, setMaterialQTY] = useState(0);
  const [materialRate, setMaterialRate] = useState(0);
  const [materialCost, setMaterialCost] = useState(0);
  const [masoncharges, setMasoncharges] = useState(0);
  const [labourcharges, setLabourcharges] = useState(0);
  const [electriciancharges, setElectriciancharges] = useState(0);
  const [plumbercharges, setPlumbercharges] = useState(0);
  const [shutteringcharges, setShutteringcharges] = useState(0);
  const [paintercharges, setPaintercharges] = useState(0);
  const [total, setTotal] = useState(0);
  const [material, setMaterial] = useState([]);
  const [count, setCount] = useState(0);

  function AddMaterial() {
    setMaterial((material) => [
      ...material,
      {
        name: materialName,
        AU: materialAU,
        QTY: parseFloat(materialQTY),
        Rate: parseFloat(materialRate),
        Cost: materialCost,
      },
    ]);
    setCount(count + 1);
    setTotal(total + materialCost);
  }

  var prev = total;
  var [check, setCheck] = useState(true);
  function calculteTotal() {
    setTotal(
      parseFloat(prev) +
      parseFloat(masoncharges) +
      parseFloat(plumbercharges) +
      parseFloat(electriciancharges) +
      parseFloat(shutteringcharges) +
      parseFloat(labourcharges) +
      parseFloat(paintercharges)
    );
  }

  const { Option } = Select;

  const getData = async () => {
    const obj = {
      project: project,
      location: location,
      caretaker,
      cellno: parseFloat(cellno),
      Date: date,
      Material: material,
      Masoncharges: parseFloat(masoncharges),
      Labourcharges: parseFloat(labourcharges),
      Plumbercharges: parseFloat(plumbercharges),
      Shutteringcharges: parseFloat(shutteringcharges),
      Electriciancharges: parseFloat(electriciancharges),
      Paintercharges: parseFloat(paintercharges),
      Total: total,
    };

    try {
      console.log(obj, "Hello");
      const res = await axios.post(
        "http://localhost:9000/admin/addEstimation",
        obj
      );
      console.log(res, "Successfully send");
      alert(`$ \n 
         Your form has been submitted`);
    } catch (ex) {
      alert(`$ \n 
        Your form was not submitted`);
      console.log(ex);
    }
  };

  function costChangeQTY(e) {
    setMaterialQTY(parseFloat(e.target.value));
    setMaterialCost(materialRate * e.target.value);
  }
  function costChangeRate(e) {
    setMaterialRate(parseFloat(e.target.value));
    setMaterialCost(e.target.value * materialQTY);
  }
  const columns = [
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Caretaker",
      dataIndex: "caretaker",
      key: "caretaker",

    }, {
      title: "cellno",
      dataIndex: "cellno",
      key: "cellno",

    },
    {
      title: "Material",
      dataIndex: "Material",
      key: "Material",
      render: (material) => material.map(materials => {
        return (
          <div>
            name {materials.name}<br />
            Quantitiy {materials.QTY}<br />
            Rate {materials.Rate}<br />
            Cost {materials.Cost}
          </div>
        )
      })
    },
    // }, {
    //   title: "Labour",
    //   dataIndex: "LabourCharges",
    //   key: "LabourCharges",
    //   render: (Labour) => Labour.map(Labours => {
    //     return (
    //       <div>
    //         name   <b>{Labours.labourname}</b><br />
    //         Cell no   <b>{Labours.labourCellno}</b><br />
    //         Nature of work    <b>{Labours.natureofwork}</b><br />
    //         Charges   <b>{Labours.LabourChargesPaid}</b>
    //       </div>
    //     )
    //   })
    // },
    {
      title: "Materialtotal",
      dataIndex: "MaterialTotal",
      key: "MaterialTotal",

    }, {
      title: "LabourTotal",
      dataIndex: "LabourTotal",
      key: "labourTotal",

    },
  ]

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {" "}
        <h1>Estimation Performa</h1>
      </div>
      <br />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Project: "
          rules={[
            {
              required: true,
              message: "Please enter your Project Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setProject(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Location: "
          rules={[
            {
              required: true,
              message: "Please enter your Location",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Caretaker: "
          rules={[
            {
              required: true,
              message: "Please enter Caretaker",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCaretaker(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Cellno: "
          rules={[
            {
              required: true,
              message: "Please enter Cell Number",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCellno(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Date: "
          rules={[
            {
              required: true,
              message: "Please enter Caretaker",
            },
          ]}
        >
          <DatePicker
            onChange={(date, dateString) => {
              setDate(dateString);
            }}
          />
        </Form.Item>
        <br />
        <h4>Material Detail</h4>
        <div style={{ textAlign: "right" }}>
          <p>{count} Materials Added</p>
        </div>
        <br />
        <Form.Item
          label="Name: "
          rules={[
            {
              required: true,
              message: "Please enter Material Name",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setMaterialName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="AU: "
          rules={[
            {
              required: true,
              message: "Please enter Material AU",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setMaterialAU(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="QTY: "
          rules={[
            {
              required: true,
              message: "Please enter QTY",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              costChangeQTY(e);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Rate: "
          rules={[
            {
              required: true,
              message: "Please enter Caretaker",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              costChangeRate(e);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Cost: "
          rules={[
            {
              required: true,
              message: "Please enter Caretaker",
            },
          ]}
        >
          <Input value={materialCost} />
        </Form.Item>
        <br />
        <div style={{ textAlign: "right" }}>
          <button onClick={AddMaterial}>Add</button>
        </div>
        <br /> <br />
        <h4>Charges</h4>
        <br />
        <Form.Item
          label="Mason: "
          rules={[
            {
              required: true,
              message: "Please enter your Mason",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setMasoncharges(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Labour: "
          rules={[
            {
              required: true,
              message: "Please enter your Labour",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setLabourcharges(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Electrician: "
          rules={[
            {
              required: true,
              message: "Please enter your Electrician Charges",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setElectriciancharges(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Plumber: "
          rules={[
            {
              required: true,
              message: "Please enter your Plumber Charges",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setPlumbercharges(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Shuttering: "
          rules={[
            {
              required: true,
              message: "Please enter your Shuttering Charges",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setShutteringcharges(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Painter: "
          rules={[
            {
              required: true,
              message: "Please enter your Painter Charges",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setPaintercharges(e.target.value);
            }}
          />
        </Form.Item>
        <div style={{ textAlign: "right" }}>
          <button onClick={calculteTotal}>Calculate Final Cost</button>
          <br /> <br />
        </div>
        <Form.Item
          label="Total: "
          rules={[
            {
              required: true,
              message: "Please enter your Total",
            },
          ]}
        >
          <Input value={total} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              getData();
            }}
          >
            Submit proposal
          </Button>
        </Form.Item>
      </Form>
      <Table scroll={{ x: 1500 }} columns={columns} />

    </div>
  );
}
