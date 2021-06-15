import { Button } from 'antd';

const ButtonComp = ({ type = 'primary', ...props }) => {
  return <Button type={type} block {...props} />;
};

export default ButtonComp;
