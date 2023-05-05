import { Button, Space, Select, Divider, Row, Col, Card } from "antd";
import Meta from "antd/es/card/Meta";
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const AntDesignComponents = () => {
  return (
    <>
    <Divider orientation="center">SIMPLE ANT DESIGN COMPONENTS</Divider>
      <Space wrap>
        <Button type="primary" danger>
          Primary Button
        </Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
      <Select
        mode="multiple"
        style={{
          width: "25%",
        }}
        placeholder="select one country"
        defaultValue={["china"]}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="China">
          <Space>
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China (中国)
          </Space>
        </Option>
        <Option value="usa" label="USA">
          <Space>
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA (美国)
          </Space>
        </Option>
        <Option value="japan" label="Japan">
          <Space>
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            Japan (日本)
          </Space>
        </Option>
        <Option value="korea" label="Korea">
          <Space>
            <span role="img" aria-label="Korea">
              🇰🇷
            </span>
            Korea (韩国)
          </Space>
        </Option>
      </Select>
      <Divider orientation="center">
        Responsive Grid System in ANT DESIGN
      </Divider>
      <Space style={{ display:'block',width: '90%',margin:'0 auto' }}>
      <Row gutter={[20, 30]}>
        <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
      </Space>
    </>
  )
}

export default AntDesignComponents