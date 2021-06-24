import { Input } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

const ShippingForm = ({ onChange, onEstimate, ...props }) => {
  return (
    <Input
      style={{ height: 'fit-content' }}
      placeholder="Digite seu CEP..."
      suffix={
        <div
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onClick={onEstimate}
          onKeyDown={onEstimate}
        >
          <DollarOutlined />
        </div>
      }
      onChange={onChange}
      inputMode="numeric"
      {...props}
    />
  );
};

export default ShippingForm;
