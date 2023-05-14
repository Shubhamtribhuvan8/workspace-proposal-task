import { Progress } from 'antd';
import { red, green } from '@ant-design/colors';

interface ProgressProps {
  percent: number;
  steps: number;
}

const CustomProgress: React.FC<ProgressProps> = ({ percent, steps }) => {
  const strokeColor = [
    red[5],
    green[6],
    green[6],
    green[5],
    green[5],
    red[5],
    red[5],
    red[5],
    red[5],
    green[6],
    green[6],
    green[5],
    green[5],
    red[5],
    red[5],
    red[5],
    red[5],
  ];

  return <Progress percent={percent} steps={steps} strokeColor={strokeColor} />;
};

export default CustomProgress;
