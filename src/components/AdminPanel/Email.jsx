import React from 'react'
import { Form, Input, Button, Checkbox, Select } from 'antd';
import axios from "axios";
const { Option } = Select;

export default function Email() {
    const onFinish = async (values) => {
          console.log('Success:', values);
          await axios
        .request({
          baseURL:"http://localhost:9000/adminPanel",
          url:"/sendAllEmail",
          method:"post",
          data:{
            "from":values.From,
            "subject":values.Subject,
            "category":values.category
          }
        }).then((response)=>{
            console.log(response)
        })
        //   axios.post("http://localhost:9000/adminPanel/sendAllEmail", 
        //   {
        //       from:values.From,
        //       subject:values.Subject,
        //       category:values.category

        //   }).then((response)=>{
        //       console.log(response)
        //   })
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        }
        const [form] = Form.useForm();
        const onGenderChange = (value) => {
            switch (value) {
              case 'All':
                form.setFieldsValue({
                  note: 'All',
                });
                return;
        
              case 'Beneficiary':
                form.setFieldsValue({
                  note: 'Beneficiary',
                });
                return;
        
              case 'Donor':
                form.setFieldsValue({
                  note: 'Donor',
                });
            }
          };
    return (
        <div id="Email">
                <Form
      name="basic"
      labelCol={{
        span: 2,
      }}
      wrapperCol={{
        span: 22,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
         <Form.Item
        label="From"
        name="From"
        rules={[
          {
            required: true,
            message: 'Please input this field',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Subject"
        name="Subject"
        rules={[
          {
            required: true,
            message: 'Please input your subject!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Message"
        name="Message"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select
          placeholder="Select a Category"
          onChange={onGenderChange}
          allowClear
          style={{color:"black"}}
        >
          <Option value="Donor">Donor</Option>
          <Option value="Beneficiary">Beneficiary</Option>
          <Option value="All">All</Option>
        </Select>
      </Form.Item>

      

  

      <Form.Item
        wrapperCol={{
          offset: 2,
          span: 22,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>


        </div>
    )
}
