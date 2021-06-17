import { Button } from 'antd';
import { ButtonContainer } from './button.styles';

const ButtonComp = ({ type = 'primary', ...props }) => {
  return (
    <ButtonContainer>
      <Button type={type} block {...props} />
    </ButtonContainer>
  );
};

export default ButtonComp;
